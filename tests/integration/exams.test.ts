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
});
