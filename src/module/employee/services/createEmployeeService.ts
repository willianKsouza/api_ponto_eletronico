import Employee from "../../../shared/typeorm/entities/employee/employeeEntity";
import { appDataSource } from "../../../shared/typeorm/appDataSource";
import { apiError } from "../../../shared/helpers/apiErrors";


interface EmployeeType {
  name_employee: string;
  function_employee: string;
  workload_employee: number;
  email: string;
  password: string;
}

export default class CreateEmployeeService {
  async action({
    name_employee,
    function_employee,
    workload_employee,
    email,
    password,
  }: EmployeeType): Promise<Employee> {
    const employeeRepository = appDataSource.getRepository(Employee);
    const employeeEmailExist = employeeRepository.findOne({
      where: {
        name_employee,
      },
    });

    if (await employeeEmailExist)
      throw new apiError("ja existe alguem com esse email", 500);

    const employee = employeeRepository.create({
      name_employee,
      function_employee,
      workload_employee,
      email,
      password,
    });
    await employeeRepository.save(employee);
    return employee;
  }
}
