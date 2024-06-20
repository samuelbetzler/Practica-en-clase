import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CanchaService } from './cancha.service'; 
import { CreateCanchaDto } from './dto/create-cancha.dto'; 
import { UpdateCanchaDto } from './dto/update-cancha.dto'; 

@Controller('cancha')
export class CanchaController {
  constructor(private readonly canchaService: CanchaService) {}

  @Post()
  async create(@Body() createCanchaDto: CreateCanchaDto) {
    return this.canchaService.create(createCanchaDto);
  }

  @Get()
  async findAll() {
    return this.canchaService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.canchaService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCanchaDto: UpdateCanchaDto) {
    return this.canchaService.update(+id, updateCanchaDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.canchaService.softRemove(+id);
  }
}
