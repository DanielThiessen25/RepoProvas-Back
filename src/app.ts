import "./setup";

import express from "express";
import cors from "cors";
import "reflect-metadata";

import connectDatabase from "./database";

import * as examController from "./controllers/examController";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/enviar", examController.createExam);

export async function init () {
  await connectDatabase();
}

export default app;
