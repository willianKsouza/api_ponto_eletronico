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
  id: number;

  @Column()
  order_date: string;

  @Column({ nullable: true })
  in_time: string;

  @Column({ nullable: true })
  launch_in: string;

  @Column({ nullable: true })
  launch_out: string;

  @Column({ nullable: true })
  out_time: string;
  @Column({ nullable: true })
  owed_hours: number;
  @Column()
  work_load: number;

  @Column({ nullable: true })
  overtime: number;

  @ManyToOne(() => Employee, (employee) => employee.id, {
    onUpdate: "CASCADE",
    onDelete: "NO ACTION",
  })
  @JoinColumn({
    name: "employee_id",
    referencedColumnName: "id",
    foreignKeyConstraintName: "fk_timesheet_employee_id",
  })
  employee: number;
}
