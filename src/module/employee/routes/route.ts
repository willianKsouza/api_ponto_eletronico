import { Router } from "express";
import EmployeesController from "../controllers/employeeController";
 const employeesRouter = Router();


const employeesController = new EmployeesController()

employeesRouter.get("/", employeesController.list);
employeesRouter.post('/', employeesController.create);
employeesRouter.put('/:id', employeesController.update);

export default employeesRouter