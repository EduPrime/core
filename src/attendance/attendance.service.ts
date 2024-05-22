import { Injectable } from '@nestjs/common';
import { PrismaCrudService } from 'nestjs-prisma-crud';

@Injectable()
export class AttendanceService extends PrismaCrudService {
  constructor() {
    super({
      model: 'attendance',
      allowedJoins: [],
      defaultJoins: [],
    });
  }
}
