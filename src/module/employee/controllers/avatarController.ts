import { Request, Response } from "express";
import { apiError } from "../../../shared/helpers/apiErrors";
import { supabaseStorage } from "../../../shared/utils/uploadSupaBase.utils";
import path from "path";


export class AvatarController {
  async uploadAvatar(req: Request, res: Response) {
    const uploadFolder = path.resolve(
      __dirname,
      "..",
      "..",
      "..",
      "..",
      "uploads"
    );
   
      
    // const caminhoDaImagem = `${uploadFolder}/cachoeira.jpeg`;

  const { data, error } = await supabaseStorage.storage
    .from("avatars")
    .upload(`${req.file?.filename}`,req.file, {
      contentType:"image/jpeg"
    });
    
    if (data) {
        return res.json({ data });
    } else {
     return res.json({ error });
      }

  }

}