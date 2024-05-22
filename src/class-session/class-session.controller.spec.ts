import { Test, TestingModule } from '@nestjs/testing';
import { ClassSessionController } from './class-session.controller';
import { ClassSessionService } from './class-session.service';

describe('ClassSessionController', () => {
  let controller: ClassSessionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClassSessionController],
      providers: [ClassSessionService],
    }).compile();

    controller = module.get<ClassSessionController>(ClassSessionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
