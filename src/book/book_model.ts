import { Prisma } from '@prisma/client';

export class Book implements Prisma.BookCreateInput {
  id: string;
  title: string;
  author: string;
  description: string;
  createdAt?: string | Date;
  updatedAt?: string | Date;
}
