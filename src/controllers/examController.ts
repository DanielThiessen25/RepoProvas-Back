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
    name:name, subjectid:subjectId, link:url, categoryid:categoryId, teacherid:teacherId
    };

      await examService.createExam(exam);
    return res.sendStatus(201);
    
  } catch (err) {

    return res.sendStatus(500);
  }
}

export async function getExamsByTeacher (req: Request, res: Response) {
  try {
    const teacher = await examService.getExamsByTeacher(parseInt(req.params.idProf));
    console.log(teacher);
    res.send(teacher);
  } catch (err) {
    console.error(err);
    res.send(err);
    res.sendStatus(500);
  }
}

export async function getExamsBySubject (req: Request, res: Response) {
  try {
    const subject = await examService.getExamsBySubject(parseInt(req.params.idDisciplina));
    console.log(subject);
    res.send(subject);
  } catch (err) {
    console.error(err);
    res.send(err);
    res.sendStatus(500);
  }
}

