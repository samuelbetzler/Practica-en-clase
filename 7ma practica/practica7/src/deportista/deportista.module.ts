import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Deportista } from './entities/deportista.entity'; 
import { DeportistaService } from './deportista.service';
import { DeportistaResolver } from './deportista.resolver';

@Module({
  providers: [DeportistaResolver, DeportistaService],
  imports: [TypeOrmModule.forFeature([Deportista])],
  exports: [TypeOrmModule],
})
export class DeportistaModule {}
