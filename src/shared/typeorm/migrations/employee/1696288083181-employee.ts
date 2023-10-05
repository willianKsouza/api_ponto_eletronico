import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Employee1696288083181 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "employees",
        columns: [
          {
            name: "employee_id",
            type: "int",
            isPrimary: true,
            isUnique:true
          },
          {
            name: "name_employee",
            type: "varchar",
          },
          {
            name: "avatar_employee",
            type: "varchar",
            default: null,
          },
          {
            name: "function_employee",
            type: "varchar",
          },
          {
            name: "workload_employee",
            type: "int",
          },
          {
            name: "email_employee",
            type: "varchar",
          },
          {
            name: "password",
            type: "varchar",
          },
          {
            name: "created_at",
            type: "Date",
          },
          {
            name: "Updated_at",
            type: "Date",
          },
          {
            name: "deleted_at",
            type: "Date",
            default: null,
          },
        ],
      })
    );
  }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("employees");
  }
}
