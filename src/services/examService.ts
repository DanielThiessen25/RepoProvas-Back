import { Request, Response } from "express";
import { getRepository } from "typeorm";

import Exam from "../entities/Exam";
import * as teacherService from "../services/teacherService";
import * as subjectService from "../services/subjectService";
import * as categoryService from "../services/categoryService";
import Category from "../entities/Category";

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

export async function subjectIdExams (subjectid : number){
  const exams = await getRepository(Exam).find({
    where: {
      subjectid: subjectid
  }
  });
  return exams.length;
}

export async function getExamsByTeacher(teacherId:number) {
  let list=[];
  const teacher = await teacherService.getTeacherByID(teacherId);
  const exams = await getRepository(Exam).find({
      where: {
          teacherid:teacherId
      },
  });
  for(let i=0; i<exams.length; i++){
    const subject = await subjectService.getSubjectByID(exams[i].subjectid);
    const category = await categoryService.getCategoryByID(exams[i].categoryid);
    let object = {
      name:exams[i].name,
      link:exams[i].link,  
      subject:subject,
      category:category,
      teacher:teacher
    };
    list.push(object);
  }
  return list;
}

export async function getExamsBySubject(subjectId:number) {
  
  let list = [];
  const subject = await subjectService.getSubjectByID(subjectId);
  const exams = await getRepository(Exam).find({
      where: {
          subjectid:subjectId
      },
  });
  for(let i=0; i<exams.length; i++){
    const teacher = await teacherService.getTeacherByID(exams[i].teacherid);
    const category = await categoryService.getCategoryByID(exams[i].categoryid);
    let object = {
      name:exams[i].name,
      link:exams[i].link,  
      subject:subject,
      category:category,
      teacher:teacher
    };
    list.push(object);
  }
  return list;
}

