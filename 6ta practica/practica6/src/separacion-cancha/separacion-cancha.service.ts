import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SeparacionCancha } from './entities/separacion-cancha.entity';
import { CreateSeparacionCanchaDto } from './dto/create-separacion-cancha.dto';
import { UpdateSeparacionCanchaDto } from './dto/update-separacion-cancha.dto';

@Injectable()
export class SeparacionCanchaService {
  constructor(
    @InjectRepository(SeparacionCancha)
    private separacionCanchaRepository: Repository<SeparacionCancha>,
  ) {}

  async create(createSeparacionCanchaDto: CreateSeparacionCanchaDto): Promise<SeparacionCancha> {
    const separacionCancha = this.separacionCanchaRepository.create(createSeparacionCanchaDto);
    return this.separacionCanchaRepository.save(separacionCancha);
  }

  async findAll(): Promise<SeparacionCancha[]> {
    return this.separacionCanchaRepository.find();
  }

  async findOne(id: number): Promise<SeparacionCancha> {
    return this.separacionCanchaRepository.findOne({ where: { id } });
  }

  async update(id: number, updateSeparacionCanchaDto: UpdateSeparacionCanchaDto): Promise<SeparacionCancha> {
    await this.separacionCanchaRepository.update(id, updateSeparacionCanchaDto);
    return this.separacionCanchaRepository.findOne({ where: { id } });
  }

  async softRemove(id: number): Promise<SeparacionCancha> {
    const separacionCancha = await this.separacionCanchaRepository.findOne({ where: { id } });
    if (!separacionCancha) {
      throw new Error(`SeparacionCancha with ID ${id} not found`);
    }
    separacionCancha.estado = 'Inactivo';
    return this.separacionCanchaRepository.save(separacionCancha);
  }
}
