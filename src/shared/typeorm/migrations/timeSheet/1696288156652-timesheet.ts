import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class Timesheet1696288156652 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: "timesheet",
            columns: [
              {
                name: "time_sheet_id",
                type: "int",
                isPrimary: true,
              },
              {
                name: "in_time",
                type: "Date",
                default: null,
              },
              {
                name: "launch_in",
                type: "Date",
                default: null,
              },
              {
                name: "launch_out",
                type: "Date",
                default: null,
              },
              {
                name: "out_time",
                type: "Date",
                default: null,
              },
              {
                name: "owed_hours",
                type: "int",
                default: null,
              },
              {
                name: "hours_worked",
                type: "int",
                default: null,
              },
              {
                name: "overtime",
                type: "int",
                default: null,
              },
              {
                name: "employee_id",
                type: "int",
                  foreignKeyConstraintName: "fk_timesheet_employee_id",
              }
            ],
          })
          
        );
      await queryRunner.createForeignKey(
        "employees",
        new TableForeignKey({
          columnNames: ["employee_id"],
          referencedColumnNames: ["employee_id"],
          name: "fk_timesheet_employee_id",
          referencedTableName: "employees",
          onDelete: "CASCADE",
        })
      );
    }

  public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("employees");
    }

}
