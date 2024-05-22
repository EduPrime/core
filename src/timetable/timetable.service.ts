import { Injectable } from '@nestjs/common';
import { PrismaCrudService } from 'nestjs-prisma-crud';

@Injectable()
export class TimetableService extends PrismaCrudService {
  constructor() {
    super({
      model: 'timetable',
      allowedJoins: [],
      defaultJoins: [],
    });
  }
}
