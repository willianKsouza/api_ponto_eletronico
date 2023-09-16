import { Request, Response } from "express";
import { LoginEmployeeService } from "../service/loginEmployeeService";


export class LoginEmployeeController {
  async login(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;
    const LoginService = new LoginEmployeeService();
    const loginEmployee = await LoginService.action({ email, password });
    return res.json(loginEmployee);
  }
}
