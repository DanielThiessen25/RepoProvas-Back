import { Request, Response } from "express";

import * as examService from "../services/examService";
import * as categoryService from "../services/categoryService";
import * as subjectService from "../services/subjectService";
import * as teacherService from "../services/teacherService";


export async function createExam(req: Request, res: Response) {
  try {
    let {name, category, subject, teacher, url} = req.body;
    let categoryId = await categoryService.getCategory(category);
    let teacherId = await teacherService.getTeacher(teacher);
    let subjectId = await subjectService.getSubject(subject);
    let exam = {
        name:name, subjectId:subjectId, link:url, categoryId:categoryId, teacherId:teacherId
    };
    await examService.createExam(exam);
    return res.sendStatus(201);
  } catch (err) {
    console.error(err);
    return res.sendStatus(500);
  }
}
