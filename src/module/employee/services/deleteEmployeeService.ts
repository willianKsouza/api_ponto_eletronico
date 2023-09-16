import { apiError } from "../../../shared/helpers/apiErrors";
import { appDataSource } from "../../../shared/typeorm/appDataSource";
import Employee from "../../../shared/typeorm/entities/entity";


interface EmployeeTypeId {
  id_user: number;
}

export class DeleteEmployeesService {
  async action({ id_user }: EmployeeTypeId) {
    const employeesRepository = appDataSource.getRepository(Employee);
    const employee = await employeesRepository.delete(id_user);

    if (!employee) {
      throw new apiError("funcionario nao encontrado", 404);
    }
    return employee;
  }
}
