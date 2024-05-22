import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { DisciplineService } from './discipline.service';
import { CreateDisciplineDto } from './dto/create-discipline.dto';
import { UpdateDisciplineDto } from './dto/update-discipline.dto';

@Controller('discipline')
export class DisciplineController {
  constructor(private readonly disciplineService: DisciplineService) {}

  @Post()
  async create(@Body() createDisciplineDto: CreateDisciplineDto, @Query('crudQuery') crudQuery: string) {
    const created = await this.disciplineService.create(createDisciplineDto, { crudQuery });
    return created;
  }

  @Get()
  async findMany(@Query('crudQuery') crudQuery: string) {
    const matches = await this.disciplineService.findMany({ crudQuery });
    return matches;
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Query('crudQuery') crudQuery: string) {
    const match = await this.disciplineService.findOne(id, { crudQuery });
    return match;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDisciplineDto: UpdateDisciplineDto,
    @Query('crudQuery') crudQuery: string,
  ) {
    const updated = await this.disciplineService.update(id, updateDisciplineDto, { crudQuery });
    return updated;
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Query('crudQuery') crudQuery: string) {
    return this.disciplineService.remove(id, { crudQuery });
  }
}
