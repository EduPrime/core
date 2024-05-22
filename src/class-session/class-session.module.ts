import { Module } from '@nestjs/common';
import { ClassSessionService } from './class-session.service';
import { ClassSessionController } from './class-session.controller';

@Module({
  controllers: [ClassSessionController],
  providers: [ClassSessionService]
})
export class ClassSessionModule {}
