import { apiError } from "../../../shared/helpers/apiErrors";
import { appDataSource } from "../../../shared/typeorm/appDataSource";
import Employee from "../../../shared/typeorm/entities/employee/employeeEntity";

interface EmployeeType {
  id_user: number;
  name: string;
  function_employee: string;
  workload: number;
  email: string;
}
export class UpdateEmployeeService {
  async action({
    id_user,
    name,
    function_employee,
    workload,
    email,
  }: EmployeeType) {
    const employeeRepository = appDataSource.getRepository(Employee);
    const employee = await employeeRepository.findOne({
      where: {
        id: id_user,
      }
    });
    if (!employee) throw new apiError("erro ao atualizar", 404);

    employeeRepository.update(
      {
        id: id_user,
      },
      {
        name,
        function_employee,
        workload,
        email,
      }
    );
  }
}
