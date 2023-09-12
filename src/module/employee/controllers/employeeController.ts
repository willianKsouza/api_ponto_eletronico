import { Request, Response } from "express";
import CreateEmployeeService from "../services/createEmployeeService";


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
}
