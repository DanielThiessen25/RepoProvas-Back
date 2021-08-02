import "./setup";

import express from "express";
import cors from "cors";
import "reflect-metadata";

import connectDatabase from "./database";

import * as examController from "./controllers/examController";
import * as teacherController from "./controllers/teacherController";



const app = express();
app.use(cors());
app.use(express.json());

app.post("/enviar", examController.createExam);
app.get("/professores", teacherController.getAllTeachers)

export async function init () {
  await connectDatabase();
}

export default app;
