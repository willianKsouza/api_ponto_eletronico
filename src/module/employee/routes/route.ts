import { Router } from "express";
import EmployeesController from "../controllers/employeeController";
 const employeesRouter = Router();


const employeesController = new EmployeesController()
employeesRouter.get("/:id", employeesController.read);
employeesRouter.get("/", employeesController.list);
employeesRouter.post('/', employeesController.create);
employeesRouter.put('/:id', employeesController.update);
employeesRouter.delete('/:id', employeesController.delete);

export default employeesRouter