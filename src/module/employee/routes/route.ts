import { Router } from "express";
import EmployeesController from "../controllers/employeeController";
 const employeesRouter = Router();


const employeesController = new EmployeesController()


employeesRouter.post('/', employeesController.create);

export default employeesRouter