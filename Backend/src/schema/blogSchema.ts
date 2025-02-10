import { StatusValue } from '@prisma/client';

export interface IPOST {
    title: string;
    content: string;
    image: string;
    views: number;
    categoryID: string[]; // Ensure this matches the Prisma schema
    createdAt?: Date;
    status?: StatusValue;
}