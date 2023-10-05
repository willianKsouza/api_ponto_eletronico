import { apiError } from "../../../shared/helpers/apiErrors";
import { appDataSource } from "../../../shared/typeorm/appDataSource";
import Employee from "../../../shared/typeorm/entities/employee/employeeEntity";


interface EmployeeTypeId {
  id_user: number;
}

export class GetEmployeesService {
  async action({ id_user }: EmployeeTypeId) {
    const employeesRepository = appDataSource.getRepository(Employee);
    const employees = await employeesRepository.findOne({
      where: {
        employee_id: id_user,
      },
    });

    if (!employees) 
      throw new apiError("funcionario nao encontrado", 404);
    return employees;
  }
}
