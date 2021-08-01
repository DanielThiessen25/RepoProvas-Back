import { Request, Response } from "express";

import * as examService from "../services/examService";


export async function createExam(req: Request, res: Response) {
  try {
    await examService.createExam(exam);
    res.sendStatus(201);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}
