import { Request, Response } from "express";

import * as teacherService from "../services/teacherService";

export async function getAllTeachers (req: Request, res: Response) {
  try {
    const teachers = await teacherService.getAllTeachers();
    console.log(teachers);
    res.send(teachers);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}
