import { Request, Response } from "express";
import { getRepository } from "typeorm";

import Teacher from "../entities/Teacher";

export async function getTeacher(teacherName: string) {
    const id = await getRepository(Teacher).find({
        where: {
            name: teacherName
        }
    });

    return id[0].id;
}

