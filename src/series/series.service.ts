import { Injectable } from '@nestjs/common';
import { PrismaCrudService } from 'nestjs-prisma-crud';

@Injectable()
export class SeriesService extends PrismaCrudService {
  constructor() {
    super({
      model: 'series',
      allowedJoins: [],
      defaultJoins: [],
    });
  }
}
