// import multer from "multer";
// import path from "path";
// import crypto from "crypto";
// import Employee from "../../../shared/typeorm/entities/employee/employeeEntity";
// import { appDataSource } from "../../../shared/typeorm/appDataSource";
// import { apiError } from "../../../shared/helpers/apiErrors";


// interface EmployeeType {
//   name: string;
//   file: string;

// }


// export class CreateAvatarService {
//   storage: multer.StorageEngine;
//     readonly uploadFolder: string;
//     readonly fileName: string
//   constructor() {
//     this.uploadFolder = path.resolve(
//       __dirname,
//       "..",
//       "..",
//       "..",
//       "..",
//       "uploads"
//     );
//     this.storage = multer.diskStorage({
//       destination: this.uploadFolder,
//       filename: (request, file, callback) => {
//         const filehash = crypto.randomBytes(10).toString("hex");

//         const fileName = `${filehash}-${file.originalname}`;
        
//         callback(null, fileName);
//             const employeeRepository = appDataSource.getRepository(Employee);
//             const employee = await employeeRepository.findOne({
//               where: {
//                 name,
//               },
//             });
//       },
//     });
//   }

//   public async action({ file, name }: EmployeeType) {


//       if (!employee) {
//         throw new apiError("ocorreu algum erro", 500);
//     }
        
      
    
//     const storage = this.storage
//     return multer({ storage });
//   }
// }


