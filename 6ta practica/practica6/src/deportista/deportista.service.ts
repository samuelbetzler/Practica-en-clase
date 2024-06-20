import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Deportista } from './entities/deportista.entity';
import { CreateDeportistaDto } from './dto/create-deportista.dto';
import { UpdateDeportistaDto } from './dto/update-deportista.dto';

@Injectable()
export class DeportistaService {
  constructor(
    @InjectRepository(Deportista)
    private deportistaRepository: Repository<Deportista>,
  ) {}

  async create(createDeportistaDto: CreateDeportistaDto): Promise<Deportista> {
    const deportista = this.deportistaRepository.create(createDeportistaDto);
    return this.deportistaRepository.save(deportista);
  }

  async findAll(): Promise<Deportista[]> {
    return this.deportistaRepository.find();
  }

  async findOne(id: number): Promise<Deportista> {
    return this.deportistaRepository.findOne({ where: { id } });
  }

  async update(id: number, updateDeportistaDto: UpdateDeportistaDto): Promise<Deportista> {
    await this.deportistaRepository.update(id, updateDeportistaDto);
    return this.deportistaRepository.findOne({ where: { id } });
  }

  async softRemove(id: number): Promise<Deportista> {
    const deportista = await this.deportistaRepository.findOne({ where: { id } });
    if (!deportista) {
      throw new Error(`Deportista with ID ${id} not found`);
    }
    deportista.estado = 'Inactivo';
    return this.deportistaRepository.save(deportista);
  }
}
