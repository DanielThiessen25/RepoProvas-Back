import { Request, Response } from "express";
import { getRepository } from "typeorm";

import Teacher from "../entities/Teacher";
import * as examService from "./examService";

export async function getTeacher(teacherName: string) {
    const id = await getRepository(Teacher).find({
        where: {
            name: teacherName
        }
    });

    return id[0].id;
}

export async function getAllTeachers() {
    const id = await getRepository(Teacher).find({});
    let object = [];
    for(let i=0; i<id.length; i++){
        const qtd = await examService.teacherIdExams(id[i].id);
        object.push({id: id[i].id, name: id[i].name, qtd: qtd});
    }
    
    return object;
}
