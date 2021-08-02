import { Request, Response } from "express";
import { getRepository } from "typeorm";

import Exam from "../entities/Exam";

interface ExamCreate {
    name:string;
    subjectid: number;
    link: string;
    categoryid: number;
    teacherid: number;
}

export async function createExam (exam: ExamCreate) {
  const newExam = await getRepository(Exam).create(exam);
  await getRepository(Exam).save(newExam);
  return newExam;
}

export async function teacherIdExams (teacherid : number){
  const exams = await getRepository(Exam).find({
    where: {
      teacherid: teacherid
  }
  });
  return exams.length;

}
