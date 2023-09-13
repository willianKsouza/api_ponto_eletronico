import { Request, Response } from "express";
import CreateEmployeeService from "../services/createEmployeeService";
import { UpdateEmployeeService } from "../services/updateEmployeeService";
import { ListEmployeesService } from "../services/listEmployeesService";


export default class EmployeesController {
  async list(req: Request, res: Response) {
    const employeeService = new ListEmployeesService()
    const employees = await employeeService.action()
    return res.status(201).json(employees);
  }

  async create(req: Request, res: Response): Promise<Response> {
    const { name, function_employee, email, password } = req.body;

    const employeeService = new CreateEmployeeService();

    const employee = await employeeService.action({
      name,
      function_employee,
      email,
      password,
    });

    return res.json(employee);
  }

  async update(req: Request, res: Response) {
    const { name, function_employee, email } = req.body;
    const { id } = req.params;
    const id_user = Number(id);

    const employeeService = new UpdateEmployeeService();

    const employee = await employeeService.action({
      id_user,
      name,
      function_employee,
      email,
    });

    return res.status(201).json(employee);
  }
}
