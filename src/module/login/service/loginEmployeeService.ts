import { apiError } from "../../../shared/helpers/apiErrors";
import { appDataSource } from "../../../shared/typeorm/appDataSource";
import Employee from "../../../shared/typeorm/entities/entity";

interface EmployeeType {
  email: string;
  password: string;
}

export class LoginEmployeeService {
  async action({
    email,
    password,
  }: EmployeeType): Promise<Employee | null> {
    const employeeRepository =  appDataSource.getRepository(Employee);
    const employee = await employeeRepository.findOneBy({
      email: email,
      password:password
    });


    if (!employee) {
      throw new apiError("login nao encontrado", 404);
    }
    return employee
  }
}
