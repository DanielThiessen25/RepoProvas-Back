import supertest from "supertest";
import "../../src/setup";
import { getConnection } from "typeorm";

import app, { init } from "../../src/app";
import { createExam } from "../factories/examFactory";
import { clearDatabase } from "../utils/database";

beforeAll(async () => {
  await init();
});

beforeEach(async () => {
  await clearDatabase();
});

afterAll(async () => {
  await getConnection().close();
});

describe("POST /enviar", () => {
  it("should answer with text \"OK!\" and status 201", async () => {
    const exam = await createExam();
    expect(exam.status).toBe(201);
  });
  it("should answer with status 500 when no name or url has been sent", async () => {
    const body = {
      name: "",
      category: "P1",
      url: "https://google.com",
      teacher: "Carla",
      subject: ""
    }
    const response = await supertest(app).post("/enviar").send(body);
    expect(response.status).toBe(500);
  });
});

describe("GET /professores", () => {

  it("should answer the list containing the quantities of each teacher", async () => {
    const exam = await createExam();
    const teachers = await supertest(app).get("/professores");

    expect(teachers.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          qtd: 1
        })
      ]));
  });

  it("should answer with a list of teacher as objects", async () => {
    const teachers = await supertest(app).get("/professores");
    expect(teachers.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: 1
        })
      ])
    );
  });
});

describe("GET /disciplinas", () => {
  it("should answer with a list of teacher as objects", async () => {
    const subjects = await supertest(app).get("/disciplinas");
    expect(subjects.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: 3
        })
      ])
    );
  });

    it("should answer a list containing the quantities of exams", async () => {
      const exam = await createExam();
      const subjects = await supertest(app).get("/disciplinas");
      expect(subjects.body).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            qtd: 1
          })
        ]));
    });
});

describe("GET /professores/:idProf", () => {

  it("should answer the list of exams", async () => {
    const exam = await createExam();
    const teachers = await supertest(app).get("/professores/1");

    expect(teachers.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name:"teste"
        })
      ]));
  });

  it("should answer with exams of the respective teacher", async () => {
    const exam = await createExam();
    const teachers = await supertest(app).get("/professores/1");
    expect(teachers.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          teacher: "João"
        })
      ])
    );
  });
});

describe("GET /disciplinas/:idDisciplina", () => {

  it("should answer the list of exams", async () => {
    const exam = await createExam();
    const subjects = await supertest(app).get("/disciplinas/3");

    expect(subjects.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name:"teste"
        })
      ]));
  });

  it("should answer with exams of the respective teacher", async () => {
    const exam = await createExam();
    const subjects = await supertest(app).get("/disciplinas/3");
    expect(subjects.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          subject: "Cálculo"
        })
      ])
    );
  });
});