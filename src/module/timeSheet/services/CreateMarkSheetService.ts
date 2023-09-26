import { calcOwedHours } from "../../../shared/helpers/calcOverTime";
import { appDataSource } from "../../../shared/typeorm/appDataSource";
import Timesheet from "../../../shared/typeorm/entities/timeSheet/timeSheetEntity";
import { differenceInHours } from "date-fns";

interface PayLoadMarking {
  currentTime: string;
  id: number;
  typeMarking: string;
  workload: number;
}
export class CreateMarkSheetService {
  async action({ currentTime, id, typeMarking, workload }: PayLoadMarking) {
    const actualDateSystem = new Date().toLocaleDateString("pt-BR");
    // "24/09/2023"
    const timeSheetRepository = appDataSource.getRepository(Timesheet);

    const employeeTimeSheet = await timeSheetRepository.findOneBy({
      employee: id,
      order_date: "21/09/2023",
    });

    if (employeeTimeSheet) {
      switch (typeMarking) {
        case "launch_in":
          employeeTimeSheet.launch_in = currentTime;
          await timeSheetRepository.save(employeeTimeSheet);
          return employeeTimeSheet;
        case "launch_out":
          employeeTimeSheet.launch_out = currentTime;
          await timeSheetRepository.save(employeeTimeSheet);
          return employeeTimeSheet;
        case "out_time":
          employeeTimeSheet.out_time = currentTime;
          employeeTimeSheet.owed_hours = calcOwedHours(employeeTimeSheet);

          await timeSheetRepository.save(employeeTimeSheet);
          return employeeTimeSheet;
      }
    } else {
      const employeeTimeSheet = timeSheetRepository.create({
        employee: id,
        work_load: workload,
        in_time: currentTime,
        order_date: "21/09/2023",
      });
      await timeSheetRepository.save(employeeTimeSheet);
      return employeeTimeSheet;
    }
  }
}
