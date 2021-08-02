import { Request, Response } from "express";

import * as subjectService from "../services/subjectService";

export async function getAllSubjects (req: Request, res: Response) {
  try {
    const subjects = await subjectService.getAllSubjects();
    console.log(subjects);
    res.send(subjects);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}
