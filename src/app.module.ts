import { Module } from '@nestjs/common';
import { BookModule } from './book/book_module';

@Module({
  imports: [BookModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
