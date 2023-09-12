import Employee from "../typeorm/entities/entity";

import { appDataSource } from "../../../shared/typeorm/appDataSource";




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
    const employeeRepository = appDataSource.getRepository(Employee);
    const employeeEmailExist =  employeeRepository.findOne({
      where: {
        name,
      },
    });

    if (await employeeEmailExist) {
      throw Error("ja existe alguem com esse nome");
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
