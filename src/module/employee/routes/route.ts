import { Router } from "express";
import EmployeesController from "../controllers/employeeController";
import { isAuth } from "../../../shared/middlewares/isAuth";
 const employeesRouter = Router();


const employeesController = new EmployeesController()
employeesRouter.post("/", employeesController.create);
employeesRouter.put("/:id", employeesController.update);
employeesRouter.get("/:id", employeesController.read);
employeesRouter.get("/", employeesController.list);
employeesRouter.delete("/:id", isAuth, employeesController.delete);
export default employeesRouter