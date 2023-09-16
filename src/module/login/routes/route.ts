import { Router } from "express";
import { LoginEmployeeController } from "../controller/LoginEmployeeController";

 const loginRouter = Router()

const loginEmployeeController = new LoginEmployeeController()

loginRouter.get("/", loginEmployeeController.login);

export default loginRouter