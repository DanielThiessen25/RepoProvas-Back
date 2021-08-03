import { Request, Response } from "express";
import { getRepository } from "typeorm";

import Category from "../entities/Category";
import Period from "../entities/Period";

export async function getCategory(categoryName: string) {
    const id = await getRepository(Category).find({
        where: {
            name: categoryName
        }
    });

    return id[0].id;
}

export async function getAllPeriods() {
    const id = await getRepository(Period).find({});
    return id;
}

export async function getCategoryByID(categoryID: number) {
    const id = await getRepository(Category).find({
        where: {
            id: categoryID
        }
    });

    return id[0];
}

