import { Injectable } from '@nestjs/common';
import { PrismaCrudService } from 'nestjs-prisma-crud';

@Injectable()
export class GradeService extends PrismaCrudService {
  constructor() {
    super({
      model: 'grade',
      allowedJoins: [],
      defaultJoins: [],
    });
  }
}
