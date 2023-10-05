import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("employees")
export default class Employee {
  @PrimaryGeneratedColumn()
  employee_id: number;

  @Column()
  name_employee: string;

  @Column({ nullable: true })
  avatar_employee: string;

  @Column()
  function_employee: string;

  @Column()
  workload_employee: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  Updated_at: Date;

  @DeleteDateColumn({ nullable: true })
  deleted_at: Date;
}


