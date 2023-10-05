import { Request, Response } from "express";
import { apiError } from "../../../shared/helpers/apiErrors";

export class AvatarController {
    uploadAvatar(req :Request, res: Response) {
        if (req.file) {
           return res.json({
             error: false,
             message: "upload feito com sucesso",
           });
        }

       return res.json({
          error: new apiError("ocorreu um erro", 500),
          message: "ocorreu um erro",
        });
    }
}