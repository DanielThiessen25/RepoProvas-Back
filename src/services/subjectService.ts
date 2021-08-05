import { Request, Response } from "express";
import { getRepository } from "typeorm";

import Subject from "../entities/Subject";
import Period from "../entities/Period";
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
        const period = await getPeriodFromId(id[i].periodid);
        object.push({id: id[i].id, name: id[i].name, qtd: qtd, period:period});
    }
    return object;
}

export async function getSubjectByID(SubjectID: number) {
    const id = await getRepository(Subject).find({
        where: {
            id: SubjectID
        }
    });

    return id[0];
}

export async function getPeriodFromId(periodId:number){
    const period = await getRepository(Period).find({
        where: {
            id: periodId
        }
    });
    return period[0].name;
}

