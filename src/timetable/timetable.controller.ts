import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { TimetableService } from './timetable.service';
import { CreateTimetableDto } from './dto/create-timetable.dto';
import { UpdateTimetableDto } from './dto/update-timetable.dto';

@Controller('timetable')
export class TimetableController {
  constructor(private readonly timetableService: TimetableService) {}

  @Post()
  async create(@Body() createTimetableDto: CreateTimetableDto, @Query('crudQuery') crudQuery: string) {
    const created = await this.timetableService.create(createTimetableDto, { crudQuery });
    return created;
  }

  @Get()
  async findMany(@Query('crudQuery') crudQuery: string) {
    const matches = await this.timetableService.findMany({ crudQuery });
    return matches;
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Query('crudQuery') crudQuery: string) {
    const match = await this.timetableService.findOne(id, { crudQuery });
    return match;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTimetableDto: UpdateTimetableDto,
    @Query('crudQuery') crudQuery: string,
  ) {
    const updated = await this.timetableService.update(id, updateTimetableDto, { crudQuery });
    return updated;
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Query('crudQuery') crudQuery: string) {
    return this.timetableService.remove(id, { crudQuery });
  }
}
