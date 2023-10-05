import {
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  Column,
  ManyToOne,
} from "typeorm";
import Employee from "../employee/employeeEntity";
@Entity("timesheet")
export default class Timesheet {
  @PrimaryGeneratedColumn()
  time_sheet_id: number;

  @Column({ nullable: true })
  in_time: Date;

  @Column({ nullable: true })
  launch_in: Date;

  @Column({ nullable: true })
  launch_out: Date;

  @Column({ nullable: true })
  out_time: Date;

  @Column({ nullable: true })
  owed_hours: number;

  @Column()
  work_load: number;

  @Column({ nullable: true })
  hours_worked: number;

  @Column({ nullable: true })
  overtime: number;

  @ManyToOne(() => Employee, (employee) => employee.employee_id, {
    onUpdate: "CASCADE",
    onDelete: "NO ACTION",
  })
  @JoinColumn({
    name: "employee_id",
    referencedColumnName: "employee_id",
    foreignKeyConstraintName: "fk_timesheet_employee_id",
  })
  employee: number;
}
