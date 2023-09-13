import { apiError } from "../../../shared/helpers/apiErrors";
import { appDataSource } from "../../../shared/typeorm/appDataSource";
import Employee from "../typeorm/entities/entity";


interface EmployeeTypeId {
  id_user: number;
}

export class ListEmployeesService {
  async action({ id_user }: EmployeeTypeId) {
    const employeesRepository = appDataSource.getRepository(Employee);
    const employees = await employeesRepository.findOne({
      where: {
        id: id_user,
      },
    });

    if (!employees) {
      throw new apiError("funcionario nao encontrado", 404);
    }
    return employees;
  }
}
