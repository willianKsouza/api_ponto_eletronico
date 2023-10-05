import Timesheet from "../typeorm/entities/timeSheet/timeSheetEntity";

export function calcOfHours(sheet: Timesheet) {
  const hoursWorked =
    (sheet.launch_in.getHours() -
    sheet.in_time.getHours()) +
    sheet.out_time.getHours() -
    sheet.launch_out.getHours();

  const owedHours = sheet.work_load - hoursWorked;

  const overTime = hoursWorked - sheet.work_load;
  return {
    hoursWorked,
    owedHours,
    overTime,
  };
}

// class CalcOfHours {
//   constructor(private readonly sheet: Timesheet,readonly date: Date) {
//     this.sheet.out_time = date;
//     this.sheet.hours_worked = sheet.in_time.getHours() -
//     sheet.launch_in.getHours() +
//     sheet.launch_out.getHours() -
//       sheet.out_time.getHours();
//     this.sheet.owed_hours = sheet.work_load - this.sheet.hours_worked;
//   }

// }
