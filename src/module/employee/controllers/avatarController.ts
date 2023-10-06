import { Request, Response } from "express";
import { apiError } from "../../../shared/helpers/apiErrors";
import { supabaseStorage } from "../../../shared/utils/uploadSupaBase.utils";

export class AvatarController {
  async uploadAvatar(req: Request, res: Response) {
    console.log(req.file?.mimetype);

    if (req.file) {
      const { data, error } = await supabaseStorage.storage
        .from("avatars")
        .upload(req.file.filename, req.file, {
          contentType: req.file?.mimetype,
        });
      
      return res.json({ data });
      // if (data) {
      //   console.log("deu bom" + data.path);
      //   res.json({ f: true })

      // } else {
      //   console.log("deu ruim" + error.name);
      //   console.log("deu ruim" + error.stack);
      //   console.log("deu ruim" + error.message);
      // }
    } else {
      console.log("deu erro");
    }
  }
}
