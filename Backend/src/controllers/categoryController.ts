import { PrismaClient } from '@prisma/client';
import { Response, Request } from 'express';
import { ICATEGORY } from '../schema/categorySchema';

const prisma = new PrismaClient();

export const createCategory = async (req: Request, res: Response) => {
    try{
        const categoryData: ICATEGORY = req.body;
        const newCategory = await prisma.category.create({
            data: {
                categoryName: categoryData.categoryName,
                image: categoryData.image,
            }
        });
        res.status(201).json(newCategory);
    }catch(error){
        res.status(500).json({error: 'Internal Server Error'});
    }
};

export const getCategories = async (req: Request, res: Response) => {
    try{
        const categories = await prisma.category.findMany();
        res.status(200).json(categories);
    }catch(error){
        res.status(500).json({error: 'Internal Server Error'});
    }
};

export const getCategory = async (req: Request, res: Response) => {
    try{
        const {id} = req.params;
        const category = await prisma.category.findUnique({
            where: {
                id: id
            }
        });
        res.status(200).json(category);
    }catch(error){
        res.status(500).json({error: 'Internal Server Error'});
    }
};

export const updateCategory = async (req: Request, res: Response) => {
    try{
        const {id} = req.params;
        const categoryData: ICATEGORY = req.body;
        const updatedCategory = await prisma.category.update({
            where: {
                id: id
            },
            data: {
                categoryName: categoryData.categoryName,
                image: categoryData.image
            }
        });
        res.status(200).json(updatedCategory);
    }catch(error){
        res.status(500).json({error: 'Internal Server Error'});
    }
};

export const deleteCategory = async (req: Request, res: Response) => {
    try{
        const {id} = req.params;
        await prisma.category.delete({
            where: {
                id: id
            }
        });
        res.status(204).json({message: 'Category deleted successfully'});
    }catch(error){
        res.status(500).json({error: 'Internal Server Error'});
    }
};