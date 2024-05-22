import { Injectable } from '@nestjs/common';
import { PrismaCrudService } from 'nestjs-prisma-crud';

@Injectable()
export class ClassSessionService extends PrismaCrudService {
  constructor() {
    super({
      model: 'classSession',
      allowedJoins: [],
      defaultJoins: [],
    });
  }
}
