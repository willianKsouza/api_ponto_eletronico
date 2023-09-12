import { Router } from "express";
import employeesRouter from "../../module/employee/routes/route";

const routes = Router()

routes.use('/employee', employeesRouter)
// routes.use('/login', loginRouter)

export default routes
