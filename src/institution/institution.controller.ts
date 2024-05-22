import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common'
import { InstitutionService } from './institution.service'
import { CreateInstitutionDto } from './dto/create-institution.dto'
import { UpdateInstitutionDto } from './dto/update-institution.dto'

@Controller('institution')
export class InstitutionController {
  constructor(private readonly institutionService: InstitutionService) {}

  @Post()
  async create(
    @Body() createInstitutionDto: CreateInstitutionDto,
    @Query('crudQuery') crudQuery: string,
  ) {
    const created = await this.institutionService.create(createInstitutionDto, {
      crudQuery,
    })
    return created
  }

  @Get()
  async findMany(@Query('crudQuery') crudQuery: string) {
    const matches = await this.institutionService.findMany({ crudQuery })
    return matches
  }

  @Get(':id')
  async findOne(
    @Param('id') id: string,
    @Query('crudQuery') crudQuery: string,
  ) {
    const match = await this.institutionService.findOne(id, { crudQuery })
    return match
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateInstitutionDto: UpdateInstitutionDto,
    @Query('crudQuery') crudQuery: string,
  ) {
    const updated = await this.institutionService.update(
      id,
      updateInstitutionDto,
      { crudQuery },
    )
    return updated
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Query('crudQuery') crudQuery: string) {
    return this.institutionService.remove(id, { crudQuery })
  }
}
