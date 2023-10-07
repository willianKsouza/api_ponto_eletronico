import multer from "multer";
import path from "path";
import crypto from "crypto";
import { Request } from "express";
import { apiError } from "../helpers/apiErrors";

const uploadFolder = path.resolve(__dirname, "..","..", "..", "uploads");
const maxFileSize = 3 * 1024 * 1024;
const allowedTypes = ["image/jpeg", "image/jpg"];
export const uploads = multer({
  storage: multer.diskStorage({
    destination: (request: Request, file, callback) => {
      callback(null, uploadFolder);
    },
    filename: async (request: Request, file, callback) => {
      crypto.randomBytes(16, (error, hash) => {
        if (error) callback(error, "");
        const fileName = `${hash.toString("hex")}-${file.originalname}`;

        callback(null, fileName);
      });
    },
  }),
  // limits: {
  //   fileSize: maxFileSize,
  // },

  // fileFilter(req, file, callback) {
  //   if (allowedTypes.includes(file.mimetype)) {
  //     callback(null, true);
  //   } else {
  //     callback(new apiError("extençao nao permitida", 400));
  //   }
  // },
});

// async (request: Request, file, callback) => {
//       crypto.randomBytes(16, (error, hash) => {
//         if (error) callback(error, "");
//         const fileName = `${hash.toString("hex")}-${file.originalname}`;

//         callback(null, fileName);
//       });
//     }