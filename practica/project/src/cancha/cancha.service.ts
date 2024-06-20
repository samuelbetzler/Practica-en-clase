import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cancha } from './entities/cancha.entity';
import { CreateCanchaInput } from './dto/create-cancha.input';
import { UpdateCanchaInput } from './dto/update-cancha.input';

@Injectable()
export class CanchaService {
  constructor(
    @InjectRepository(Cancha)
    private canchaRepository: Repository<Cancha>,
  ) {}

  async create(createCanchaInput: CreateCanchaInput): Promise<Cancha> {
    const cancha = this.canchaRepository.create(createCanchaInput);
    return this.canchaRepository.save(cancha);
  }

  async findAll(): Promise<Cancha[]> {
    return this.canchaRepository.find();
  }

  async findOne(id: number): Promise<Cancha> {
    return this.canchaRepository.findOne({ where: { id } });
  }

  async update(id: number, updateCanchaInput: UpdateCanchaInput): Promise<Cancha> {
    await this.canchaRepository.update(id, updateCanchaInput);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.canchaRepository.update(id, { estado: 'Inactivo' });
  }
}
