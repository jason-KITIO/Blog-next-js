import { PrismaClient } from '@prisma/client';
import { Response, Request } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

const prisma = new PrismaClient();

dotenv.config();

interface LoginRequest {
  email: string;
  password: string;
}

export const LoginFunction = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body as LoginRequest;

  try {
    const author = await prisma.author.findUnique({
      where: { email },
    });
    if (!author) {
      res.status(401).json({ message: 'Invalid email or password' });
      return;
    }

    const passwordMatch = await bcrypt.compare(password, author.password);
    console.log(passwordMatch);
    if (!passwordMatch) {
      res.status(401).json({ message: 'Invalid email or password' });
      return;
    }

    // Generate JWT token
    const token = jwt.sign(
      { authorId: author.id },
      process.env.SECRET_ACCESS_TOKEN as string,
      { expiresIn: '1h' }
    );

    res.json({ token, message: 'Login successful' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
};

