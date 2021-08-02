import { Request, Response } from "express";
import { getRepository } from "typeorm";

import Subject from "../entities/Subject";
import * as examService from "./examService";

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
    let object = [];
    for(let i=0; i<id.length; i++){
        const qtd = await examService.subjectIdExams(id[i].id);
        object.push({id: id[i].id, name: id[i].name, qtd: qtd});
    }
    return object;
}




