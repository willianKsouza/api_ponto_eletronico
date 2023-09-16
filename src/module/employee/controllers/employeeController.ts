import { Request, Response } from "express";
import CreateEmployeeService from "../services/createEmployeeService";
import { UpdateEmployeeService } from "../services/updateEmployeeService";
import { ListEmployeesService } from "../services/listEmployeesService";
import { GetEmployeesService } from "../services/getEmployeeService";
import { DeleteEmployeesService } from "../services/deleteEmployeeService";

export default class EmployeesController {
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

  async read(req: Request, res: Response) {
    const { id } = req.params;
    const id_user = Number(id);
    const employeeService = new GetEmployeesService();
    const employees = await employeeService.action({ id_user });
    return res.status(201).json(employees);
  }
  async list(req: Request, res: Response) {
    const employeeService = new ListEmployeesService();
    const employees = await employeeService.action();
    return res.status(201).json(employees);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const id_user = Number(id);
    const employeeService = new DeleteEmployeesService();
    const employee = await employeeService.action({ id_user });
    return res.status(201).json(employee);
  }
}
