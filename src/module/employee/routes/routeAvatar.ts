import { Router } from "express";
import { AvatarController } from "../controllers/avatarController";

import { uploads } from "../../../shared/middlewares/uploads";
const avatarRouter = Router();

const avatarController = new AvatarController();
avatarRouter.post("/:id",uploads.single('avatar'), avatarController.uploadAvatar);


export default avatarRouter;
