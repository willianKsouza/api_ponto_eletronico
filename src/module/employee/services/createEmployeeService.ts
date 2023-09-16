import Employee from "../../../shared/typeorm/entities/entity";
import { appDataSource } from "../../../shared/typeorm/appDataSource";
import { apiError } from "../../../shared/helpers/apiErrors";




interface EmployeeType {
  name: string;
  function_employee: string;
  email: string;
  password: string;
}

export default class CreateEmployeeService {
  async action({
    name,
    function_employee,
    email,
    password,
  }: EmployeeType): Promise<Employee> {
    const   employeeRepository = appDataSource.getRepository(Employee);
    const employeeEmailExist =  employeeRepository.findOne({
      where: {
        name,
      },
    });

    if (await employeeEmailExist) {
      throw new apiError("ja existe alguem com esse email", 500);
    }

    const employee = employeeRepository.create({
      name,
      function_employee,
      email,
      password,
    });
    await employeeRepository.save(employee);
    return employee;
  }
}
