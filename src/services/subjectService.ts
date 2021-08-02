import { Request, Response } from "express";
import { getRepository } from "typeorm";

import Subject from "../entities/Subject";

export async function getSubject(subjectName: string) {
    const id = await getRepository(Subject).find({
        where: {
            name: subjectName
        }
    });

    return id[0].id;
}

export async function getAllSubjects() {
    const id = await getRepository(Subject).find({});
    return id;
}


