import "dotenv/config";
import express from "express";
import "express-async-errors";
import "reflect-metadata";
import "./shared/typeorm/appDataSource";
import router from "./shared/routes/routes";
import { Request, Response, NextFunction } from "express";
import { errorMiddleware } from "./shared/middlewares/error";
import { apiError } from "./shared/helpers/apiErrors";
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);
app.use("*", (req: Request, res: Response, next: NextFunction) => {
  const err = new apiError(`Requested path ${req.path} not found`, 404);
  next(err);
});
app.use(errorMiddleware);

app.listen(3001, () => {
  console.log("a");
});
