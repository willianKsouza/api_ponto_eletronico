import { apiError } from "../../../shared/helpers/apiErrors";
import { appDataSource } from "../../../shared/typeorm/appDataSource";
import Employee from "../../../shared/typeorm/entities/employee/employeeEntity";

interface EmployeeType {
  id_user: number;
  name_employee: string;
  function_employee: string;
  workload_employee: number;
  email: string;
}
export class UpdateEmployeeService {
  async action({
    id_user,
    name_employee,
    function_employee,
    workload_employee,
    email,
  }: EmployeeType) {
    const employeeRepository = appDataSource.getRepository(Employee);
    const employee = await employeeRepository.findOne({
      where: {
        employee_id: id_user,
      },
    });
    if (!employee) throw new apiError("erro ao atualizar", 404);

    employeeRepository.update(
      {
        employee_id: id_user,
      },
      {
        name_employee,
        function_employee,
        workload_employee,
        email,
      }
    );
  }
}
