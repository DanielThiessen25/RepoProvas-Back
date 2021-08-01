import { Request, Response } from "express";
import { getRepository } from "typeorm";

import Exam from "../entities/Exam";

interface ExamCreate {
    name:string;
    subjectId: number;
    link: string;
    categoryId: number;
    teacherId: number;
}

export async function createExam (exam: ExamCreate) {
  const newExam = await getRepository(Exam).create(exam);
  await getRepository(Exam).save(newExam);
  return newExam;
}
