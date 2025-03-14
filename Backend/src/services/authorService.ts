/* eslint-disable @typescript-eslint/no-explicit-any */

import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import { IAUTHOR } from '../controllers/registerController'; 

const prisma = new PrismaClient();

export async function createAuthor(data: IAUTHOR): Promise<Author> {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(data.password, saltRounds);

    const author = await prisma.author.create({
      data: {
        pseudo: data.pseudo,
        email: data.email,
        password: hashedPassword,
        links: data.links,
      },
    });

    return author;
  } catch (error: any) {
    if (error.code === 'P2002') {
      throw new Error('Email already exists');
    }
    throw new Error('Failed to create author');
  }
}

type Author = {
  pseudo: string;
  email: string;
  password: string;
  links: string[];
};
