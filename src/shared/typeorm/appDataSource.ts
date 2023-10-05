import "reflect-metadata";
import { DataSource,  } from "typeorm";
import Employee from "./entities/employee/employeeEntity";
import Timesheet from "./entities/timeSheet/timeSheetEntity";


export const appDataSource = new DataSource({
  migrationsTableName:"migrations",
  type: "mysql",
  host: "localhost",
  port: 3308,
  username: "root",
  password: "rugal123",
  database: "ponto_eletronico",
  entities: [Employee, Timesheet],
  migrations:[`${__dirname}/migrations/**/*.ts`],
  synchronize: true,
  logging: "all",
});

appDataSource
  .initialize()
  .then(() => {
    console.log("conexao feita com sucesso");
  })
  .catch(() => console.log(`deu erro`)
);
  
