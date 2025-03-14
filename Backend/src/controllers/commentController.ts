/* eslint-disable @typescript-eslint/no-unused-vars */
import { PrismaClient } from '@prisma/client';
import { Response, Request } from 'express';
import { ICOMMENT } from '../schema/commentSchema';

const prisma = new PrismaClient();

export const createComment = async (req: Request, res: Response) => {
    try{
        
        //const { postID } = req.params
        const commentData: ICOMMENT = req.body;
        const newComment = await prisma.comment.create({
            data: {
                message: commentData.message,
                authorName: commentData.authorName,
                authorEmail: commentData.authorEmail,
                postID: commentData.postID,
                createdAt: new Date()
            }
        });
        res.status(201).json(newComment);
    }catch(error){
        res.status(500).json(error);
    }
};

export const getComments = async (req: Request, res: Response) => {
    try{
        const comments = await prisma.comment.findMany();
        res.status(200).json(comments);
    }catch(error){
        res.status(500).json({error: 'Internal Server Error'});
    }
};

export const getComment = async (req: Request, res: Response) => {
    try{
        const {id} = req.params;
        const comment = await prisma.comment.findUnique({
            where: {
                id: id
            }
        });
        res.status(200).json(comment);
    }catch(error){
        res.status(500).json({error: 'Internal Server Error'});
    }
};

export const updateComment = async (req: Request, res: Response) => {
    try{
        const {id} = req.params;
        const commentData: ICOMMENT = req.body;
        const updatedComment = await prisma.comment.update({
            where: {
                id: id
            },
            data: {
                message: commentData.message,
                authorName: commentData.authorName,
                authorEmail: commentData.authorEmail,
                createdAt: new Date()
            }
        });
        res.status(200).json(updatedComment);
    }catch(error){
        res.status(500).json({error: 'Internal Server Error'});
    }
};

export const deleteComment = async (req: Request, res: Response) => {
    try{
        const {id} = req.params;
        await prisma.comment.delete({
            where: {
                id: id
            }
        });
        res.status(200).json({message: 'Comment deleted successfully'});
    }catch(error){
        res.status(500).json({error: 'Internal Server Error'});
    }
};