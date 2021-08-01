import { Request, Response } from "express";
import { getRepository } from "typeorm";

import Category from "../entities/Category";

export async function getCategory(categoryName: string) {
    const id = await getRepository(Category).find({
        where: {
            name: categoryName
        }
    });

    return id[0].id;
}

