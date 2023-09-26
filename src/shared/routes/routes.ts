import { Router } from "express";
import employeesRouter from "../../module/employee/routes/route";
import loginRouter from "../../module/login_logOut/routes/route";
import timeSheetRouter from "../../module/timeSheet/routes/routes";

const routes = Router();

routes.use("/employee", employeesRouter);
routes.use("/login", loginRouter);
routes.use("/sheettime", timeSheetRouter);

export default routes;
