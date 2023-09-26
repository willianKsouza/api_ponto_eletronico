import { Request, Response } from "express";
import { CreateMarkSheetService } from "../services/CreateMarkSheetService";

export class TimeSheetController {
  async sheetMarking(req: Request, res: Response) {
    const { currentTime, id, typeMarking, workload } = req.body;
    const timeSheetService = new CreateMarkSheetService();
    const timeSheet = await timeSheetService.action({
      currentTime,
      id,
      typeMarking,
      workload,
    });
      return res.status(201).json(timeSheet);
  }
}
