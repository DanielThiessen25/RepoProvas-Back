import { getRepository } from "typeorm";
import supertest from "supertest";
import app, { init } from "../../src/app";
import Exam from "../../src/entities/Exam";

export async function createExam () {
  const body = {
    name: "teste",
    category:"P1",
    url:"https://google.com",
    teacher:"Carla",
    subject:"Cálculo"
}
const response = await supertest(app).post("/enviar").send(body);

await getRepository(Exam).save(response.body);

  return response;
}
