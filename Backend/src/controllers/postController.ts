/* eslint-disable @typescript-eslint/no-unused-vars */

import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';
import { IPOST } from '../schema/blogSchema';

const prisma = new PrismaClient();

export const createPost = async (req: Request, res: Response) => {
  try {
    const postData: IPOST = req.body;
    const newPost = await prisma.post.create({
      data: {
        title: postData.title,
        content: postData.content,
        image: postData.image,
        views: postData.views || 0,
        createdAt: postData.createdAt || new Date(),
        status: postData.status,
        category: {
          connect: postData.categoryID.map((id) => ({ id })),
        },
      },
    });
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json(error);
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
};

export const updatePost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const postData: IPOST = req.body;
    const updatedPost = await prisma.post.update({
      where: {
        id: id,
      },
      data: {
        title: postData.title,
        content: postData.content,
        image: postData.image,
        views: postData.views || 0,
        createdAt: postData.createdAt || new Date(),
        status: postData.status,
        category: {
          set: postData.categoryID.map((id) => ({ id })),
        },
      },
    });
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

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