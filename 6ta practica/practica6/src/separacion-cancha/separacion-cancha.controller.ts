import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SeparacionCanchaService } from './separacion-cancha.service';
import { CreateSeparacionCanchaDto } from './dto/create-separacion-cancha.dto';
import { UpdateSeparacionCanchaDto } from './dto/update-separacion-cancha.dto';

@Controller('separacion-cancha')
export class SeparacionCanchaController {
  constructor(private readonly separacionCanchaService: SeparacionCanchaService) {}

  @Post()
  async create(@Body() createSeparacionCanchaDto: CreateSeparacionCanchaDto) {
    return this.separacionCanchaService.create(createSeparacionCanchaDto);
  }

  @Get()
  async findAll() {
    return this.separacionCanchaService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.separacionCanchaService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateSeparacionCanchaDto: UpdateSeparacionCanchaDto) {
    return this.separacionCanchaService.update(+id, updateSeparacionCanchaDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.separacionCanchaService.softRemove(+id);
  }
}
