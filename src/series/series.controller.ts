import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { SeriesService } from './series.service';
import { CreateSeriesDto } from './dto/create-series.dto';
import { UpdateSeriesDto } from './dto/update-series.dto';

@Controller('series')
export class SeriesController {
  constructor(private readonly seriesService: SeriesService) {}

  @Post()
  async create(@Body() createSeriesDto: CreateSeriesDto, @Query('crudQuery') crudQuery: string) {
    const created = await this.seriesService.create(createSeriesDto, { crudQuery });
    return created;
  }

  @Get()
  async findMany(@Query('crudQuery') crudQuery: string) {
    const matches = await this.seriesService.findMany({ crudQuery });
    return matches;
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Query('crudQuery') crudQuery: string) {
    const match = await this.seriesService.findOne(id, { crudQuery });
    return match;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateSeriesDto: UpdateSeriesDto,
    @Query('crudQuery') crudQuery: string,
  ) {
    const updated = await this.seriesService.update(id, updateSeriesDto, { crudQuery });
    return updated;
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Query('crudQuery') crudQuery: string) {
    return this.seriesService.remove(id, { crudQuery });
  }
}
