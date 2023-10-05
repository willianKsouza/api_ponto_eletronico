import { Request, Response } from "express";
import { CreateMarkSheetService } from "../services/CreateMarkSheetService";

export class TimeSheetController {
  async sheetMarking(req: Request, res: Response) {
    const { currentTimeStamp, id, idSheet, typeMarking, workload } = req.body;
    const timeSheetService = new CreateMarkSheetService();
    const timeSheet = await timeSheetService.action({
      currentTimeStamp,
      id,
      idSheet,
      typeMarking,
      workload,
    });
      return res.status(201).json(timeSheet);
  }
}
