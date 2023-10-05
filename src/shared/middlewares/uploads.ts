import multer from "multer";
import path from "path";
import crypto from "crypto";
import { Request } from "express";
import { appDataSource } from "../typeorm/appDataSource";
import Employee from "../typeorm/entities/employee/employeeEntity";

const uploadFolder = path.resolve(__dirname, "..","..", "..", "uploads");

const storage = multer.diskStorage({
  destination: uploadFolder,
  filename: async (request: Request, file, callback) => {
    const filehash = crypto.randomBytes(10).toString("hex");
    const { id } = request.params;
    const fileName = `${filehash}-${file.originalname}`;

    callback(null, fileName);
    const employeeRepository = appDataSource.getRepository(Employee);
    await employeeRepository.update(
      {
        employee_id: Number(id),
      },
      {
        avatar_employee: fileName,
      }
    );
  },
});

export const uploads = multer({ storage });
