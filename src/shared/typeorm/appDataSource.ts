import "reflect-metadata";
import { DataSource } from "typeorm";
import Employee from "./entities/entity";


export const appDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3308,
  username: "root",
  password: "rugal123",
  database: "ponto_eletronico",
  entities:[Employee],
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
