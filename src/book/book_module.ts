import { Module } from '@nestjs/common';
import { BookService } from './book_service';
import { PrismaService } from 'src/prisma.service';
import { BookController } from './book_controller';

@Module({
  controllers: [BookController],
  providers: [BookService, PrismaService],
})
export class BookModule {}
