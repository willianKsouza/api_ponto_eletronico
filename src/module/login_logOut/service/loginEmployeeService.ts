import { apiError } from "../../../shared/helpers/apiErrors";
import { appDataSource } from "../../../shared/typeorm/appDataSource";
import Employee from "../../../shared/typeorm/entities/employee/employeeEntity";
import { sign } from "jsonwebtoken";

interface EmployeeType {
  email: string;
  password: string;
}

type authToken = {
  auth: boolean;
  token: string;
};

const SECRET = "ryu888";
export class LoginEmployeeService {
  async action({
    email,
    password,
  }: EmployeeType): Promise<authToken> {
    const employeeRepository = appDataSource.getRepository(Employee);

    const employee = await employeeRepository.findOneBy({
      email: email,
      password: password,
    });
    
    if (!employee) throw new apiError("login nao encontrado", 403);

    const token = sign({ employee_id: employee.id }, SECRET, {
      expiresIn: '1h', 
    });
  
    return {
      auth: true,
      token,
    };
  }
}
