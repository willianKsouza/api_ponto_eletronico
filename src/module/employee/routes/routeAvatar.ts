import { Router } from "express";
import { AvatarController } from "../controllers/avatarController";

import { uploads } from "../../../shared/middlewares/uploads";
const avatarRouter = Router();

const avatarController = new AvatarController();
avatarRouter
  .route("/:id")
  .post(uploads.single("avatar"), avatarController.uploadAvatar);


export default avatarRouter;
