import { Injectable } from '@nestjs/common';
import { PrismaCrudService } from 'nestjs-prisma-crud';

@Injectable()
export class ClassroomService extends PrismaCrudService {
  constructor() {
    super({
      model: 'classroom',
      allowedJoins: [],
      defaultJoins: [],
    });
  }
}
