import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cancha } from './entities/cancha.entity';
import { CreateCanchaDto } from './dto/create-cancha.dto';
import { UpdateCanchaDto } from './dto/update-cancha.dto';

@Injectable()
export class CanchaService {
  constructor(
    @InjectRepository(Cancha)
    private canchaRepository: Repository<Cancha>,
  ) {}

  async create(createCanchaDto: CreateCanchaDto): Promise<Cancha> {
    const cancha = this.canchaRepository.create(createCanchaDto);
    return this.canchaRepository.save(cancha);
  }

  async findAll(): Promise<Cancha[]> {
    return this.canchaRepository.find();
  }

  async findOne(id: number): Promise<Cancha> {
    return this.canchaRepository.findOne({ where: { id } });
  }

  async update(id: number, updateCanchaDto: UpdateCanchaDto): Promise<Cancha> {
    await this.canchaRepository.update(id, updateCanchaDto);
    return this.canchaRepository.findOne({ where: { id } });
  }

  async softRemove(id: number): Promise<Cancha> {
    const cancha = await this.canchaRepository.findOne({ where: { id } });
    if (!cancha) {
      throw new Error(`Cancha with ID ${id} not found`);
    }
    cancha.estado = 'Inactivo';
    return this.canchaRepository.save(cancha);
  }
}
