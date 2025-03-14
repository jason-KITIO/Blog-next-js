/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { createAuthor } from '../services/authorService';
import { z } from 'zod';


const AuthorSchema = z.object({
  pseudo: z.string().nonempty(),
  email: z.string().email().nonempty(), 
  password: z.string().min(8).nonempty(), 
  links: z.array(z.string().url()).nonempty("At least one link is required"),
}).required();


export type IAUTHOR = z.infer<typeof AuthorSchema>;

export const registerAuthor = async (req: Request, res: Response) => {
  try {
    const authorData: IAUTHOR = AuthorSchema.parse(req.body);

    const newAuthor = await createAuthor(authorData);
    res.status(201).json(newAuthor);
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      
      console.error('Validation error:', error.errors);
      res.status(400).json({ message: 'Validation failed', errors: error.errors });
    } else {
      
      console.error('Registration error:', error);
      res.status(500).json({ message: 'Registration failed' });
    }
  }
};
