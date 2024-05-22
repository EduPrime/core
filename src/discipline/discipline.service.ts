import { Injectable } from '@nestjs/common';
import { PrismaCrudService } from 'nestjs-prisma-crud';

@Injectable()
export class DisciplineService extends PrismaCrudService {
  constructor() {
    super({
      model: 'discipline',
      allowedJoins: [],
      defaultJoins: [],
    });
  }
}
