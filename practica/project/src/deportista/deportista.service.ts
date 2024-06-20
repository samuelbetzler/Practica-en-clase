import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Deportista } from './entities/deportista.entity';
import { CreateDeportistaInput } from './dto/create-deportista.input';
import { UpdateDeportistaInput } from './dto/update-deportista.input';

@Injectable()
export class DeportistaService {
  constructor(
    @InjectRepository(Deportista)
    private deportistaRepository: Repository<Deportista>,
  ) {}

  async create(createDeportistaInput: CreateDeportistaInput): Promise<Deportista> {
    const deportista = this.deportistaRepository.create(createDeportistaInput);
    return this.deportistaRepository.save(deportista);
  }

  async findAll(): Promise<Deportista[]> {
    return this.deportistaRepository.find();
  }

  async findOne(id: number): Promise<Deportista> {
    return this.deportistaRepository.findOne({ where: { id } });
  }

  async update(id: number, updateDeportistaInput: UpdateDeportistaInput): Promise<Deportista> {
    await this.deportistaRepository.update(id, updateDeportistaInput);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.deportistaRepository.update(id, { estado: 'Inactivo' });
  }
}
