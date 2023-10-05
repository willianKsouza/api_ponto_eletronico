import { calcOfHours } from "../../../shared/helpers/calcOverTime";
import { appDataSource } from "../../../shared/typeorm/appDataSource";
import Timesheet from "../../../shared/typeorm/entities/timeSheet/timeSheetEntity";

interface PayLoadMarking {
  currentTimeStamp: string;
  id: number;
  idSheet?: number;
  typeMarking: string;
  workload: number;
}
export class CreateMarkSheetService {
  async action({
    currentTimeStamp,
    id,
    idSheet,
    typeMarking,
    workload,
  }: PayLoadMarking) {
    // const timestamp = format(new Date(), "yyyy-MM-dd HH:mm:ss.SSS"); variavel para testes

    const timeSheetRepository = appDataSource.getRepository(Timesheet);

    const employeeTimeSheet = await timeSheetRepository.findOneBy({
      time_sheet_id: idSheet,
    });


    if (employeeTimeSheet) {
      switch (typeMarking) {
        case "launch_in":
          if (!employeeTimeSheet.launch_in) {
            employeeTimeSheet.launch_in = new Date(currentTimeStamp);
            await timeSheetRepository.save(employeeTimeSheet);
            return employeeTimeSheet;
          }
          return {
            mark: true,
          };

        case "launch_out":
          if (!employeeTimeSheet.launch_out) {
            employeeTimeSheet.launch_out = new Date(currentTimeStamp);
            await timeSheetRepository.save(employeeTimeSheet);
            return employeeTimeSheet;
          }
          return {
            mark: true,
          };
        case "out_time":
          if (!employeeTimeSheet.out_time) {
            employeeTimeSheet.out_time = new Date(currentTimeStamp);

            const calcOfHoursObj = calcOfHours(employeeTimeSheet);

            employeeTimeSheet.hours_worked = calcOfHoursObj.hoursWorked;
            console.log(employeeTimeSheet.hours_worked);

            employeeTimeSheet.overtime = calcOfHoursObj.overTime;
            employeeTimeSheet.owed_hours = calcOfHoursObj.owedHours;

            await timeSheetRepository.save(employeeTimeSheet);
            return employeeTimeSheet;
          }
          return {
            mark: true,
          };
      }
    } else {
      const employeeTimeSheet = timeSheetRepository.create({
        employee: id,
        work_load: workload,
        in_time: new Date(currentTimeStamp),
      });
      await timeSheetRepository.save(employeeTimeSheet);
      return employeeTimeSheet;
    }
  }
}
