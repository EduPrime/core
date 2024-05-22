import { Injectable } from '@nestjs/common';
import { PrismaCrudService } from 'nestjs-prisma-crud';

@Injectable()
export class SchoolService extends PrismaCrudService {
  constructor() {
    super({
      model: 'school',
      allowedJoins: [],
      defaultJoins: [],
    });
  }
}
