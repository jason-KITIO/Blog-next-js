import { PrismaClient } from '@prisma/client';
import { Response, Request } from 'express';

const prisma = new PrismaClient();

export const createPost = async (req: Request, res: Response) => {
  try {
    const { title, content, imageID, categoryID } = req.body;
    const newPost = await prisma.post.create({
      data: {
        title,
        content,
        imageID,
        categoryID,
        createdAt: new Date(), // Date.now()
      },
    });
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
      }
  };


export const getPosts = async (req: Request, res: Response) => {
  try {
    const posts = await prisma.post.findMany();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getPost = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const post = await prisma.post.findUnique({
        where: {
            id: id,
        },
        });
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
    }

export const updatePost = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { title, content, imageID, categoryID } = req.body;
        const updatedPost = await prisma.post.update({
        where: {
            id: id,
        },
        data: {
            title,
            content,
            imageID,
            categoryID,
        },
        });
        res.status(200).json(updatedPost);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
    }

export const deletePost = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await prisma.post.delete({
        where: {
            id: id,
        },
        });
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};