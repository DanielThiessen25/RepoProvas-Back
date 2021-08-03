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


export async function getTeacher (req: Request, res: Response) {
  try {
    const teacher = await teacherService.getTeacherByID(parseInt(req.params.idProfessor));  
    console.log(teacher);
    res.send(teacher);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}