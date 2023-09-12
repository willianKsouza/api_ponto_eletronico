import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("employee")
export default class Employee {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  function_employee: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @CreateDateColumn()
  created_at: Date;
  @DeleteDateColumn({ nullable: true })
  deleted_at: Date;
}


