import { apiError } from "../../../shared/helpers/apiErrors";
import { appDataSource } from "../../../shared/typeorm/appDataSource";
import Employee from "../typeorm/entities/entity";

interface EmployeeTypeId {
  id_user: number;
  name: string;
  function_employee: string;
  email: string;
}
export class UpdateEmployecxeService {
  async action({ id_user, name, function_employee, email }: EmployeeTypeId) {
    const employeeRepository = appDataSource.getRepository(Employee);
    const employee = await employeeRepository.findOne({
      where: {
        id:id_user,
      },
    });

    if (!employee) {
      throw new apiError("erro ao atualizar", 404);
    } else {
      employee.name = name;
      employee.function_employee = function_employee;
      employee.email = email;
      employeeRepository.save(employee);
      return employee;
    }
  }
}