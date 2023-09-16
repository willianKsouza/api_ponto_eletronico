import { apiError } from "../../../shared/helpers/apiErrors";
import { appDataSource } from "../../../shared/typeorm/appDataSource";
import Employee from "../../../shared/typeorm/entities/entity";

export class ListEmployeesService {
    async action() {
        const employeesRepository = appDataSource.getRepository(Employee);
        const employees = await employeesRepository.find()

        if (!employees) {
            throw new apiError('funcionario nao encontrado', 404)
        }
        return employees
    }

}