import "./setup";

import express from "express";
import cors from "cors";
import "reflect-metadata";

import connectDatabase from "./database";

import * as examController from "./controllers/examController";
import * as teacherController from "./controllers/teacherController";
import * as subjectController from "./controllers/subjectController";



const app = express();
app.use(cors());
app.use(express.json());

app.post("/enviar", examController.createExam);
app.get("/professores", teacherController.getAllTeachers);
app.get("/disciplinas", subjectController.getAllSubjects);
app.get("/professores/:idProf", examController.getExamsByTeacher);
app.get("/disciplinas/:idDisciplina", examController.getExamsBySubject);

export async function init () {
  await connectDatabase();
}

export default app;
