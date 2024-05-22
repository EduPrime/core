import { Injectable } from '@nestjs/common';
import { Book, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class BookService {
  constructor(private prismaService: PrismaService) {}

  async create(data: Prisma.BookCreateInput): Promise<Book> {
    return this.prismaService.book.create({ data });
  }

  async findAll(): Promise<Book[]> {
    return this.prismaService.book.findMany();
  }

  async findOne(id: string): Promise<Book> {
    return this.prismaService.book.findUnique({ where: { id } });
  }

  async update(id: string, data: Prisma.BookUpdateInput): Promise<Book> {
    return this.prismaService.book.update({ where: { id }, data });
  }

  async remove(id: string): Promise<Book> {
    return this.prismaService.book.delete({ where: { id } });
  }
}
