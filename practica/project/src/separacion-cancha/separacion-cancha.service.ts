import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SeparacionCancha } from './entities/separacion-cancha.entity';
import { CreateSeparacionCanchaInput } from './dto/create-separacion-cancha.input';
import { UpdateSeparacionCanchaInput } from './dto/update-separacion-cancha.input';

@Injectable()
export class SeparacionCanchaService {
  constructor(
    @InjectRepository(SeparacionCancha)
    private separacionCanchaRepository: Repository<SeparacionCancha>,
  ) {}

  async create(createSeparacionCanchaInput: CreateSeparacionCanchaInput): Promise<SeparacionCancha> {
    const separacionCancha = this.separacionCanchaRepository.create(createSeparacionCanchaInput);
    return this.separacionCanchaRepository.save(separacionCancha);
  }

  async findAll(): Promise<SeparacionCancha[]> {
    return this.separacionCanchaRepository.find({ relations: ['cancha', 'deportista'] });
  }

  async findOne(id: number): Promise<SeparacionCancha> {
    return this.separacionCanchaRepository.findOne({
      where: { id },
      relations: ['cancha', 'deportista']
    });
  }
  

  async update(id: number, updateSeparacionCanchaInput: UpdateSeparacionCanchaInput): Promise<SeparacionCancha> {
    await this.separacionCanchaRepository.update(id, updateSeparacionCanchaInput);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.separacionCanchaRepository.update(id, { estado: 'Inactivo' });
  }
}
