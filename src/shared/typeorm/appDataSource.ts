import "reflect-metadata";
import { DataSource,  } from "typeorm";
import Employee from "./entities/employee/employeeEntity";
import Timesheet from "./entities/timeSheet/timeSheetEntity";


export const appDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3308,
  username: "root",
  password: "rugal123",
  database: "ponto_eletronico",
  entities: [Employee, Timesheet],
  synchronize: true,
  logging: "all",
});

appDataSource
  .initialize()
  .then(() => {
    console.log("conexao feita com sucesso");
  })
  .catch((err) => {
    console.log(`deu erro ${console.log(err)}`);
  });
