import { Test, TestingModule } from '@nestjs/testing';
import { ClassSessionService } from './class-session.service';

describe('ClassSessionService', () => {
  let service: ClassSessionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClassSessionService],
    }).compile();

    service = module.get<ClassSessionService>(ClassSessionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
