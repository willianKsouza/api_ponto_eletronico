import { Router } from "express";
import { TimeSheetController } from "../controllers/timeSheetController";


const timeSheetRouter = Router()
const timeSheetController = new TimeSheetController()
timeSheetRouter.post("/", timeSheetController.sheetMarking);

export default timeSheetRouter