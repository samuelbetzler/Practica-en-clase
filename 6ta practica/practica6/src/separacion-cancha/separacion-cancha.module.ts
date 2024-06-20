import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeparacionCanchaService } from './separacion-cancha.service';
import { SeparacionCanchaController } from './separacion-cancha.controller';
import { SeparacionCancha } from './entities/separacion-cancha.entity';
import { Deportista } from '../deportista/entities/deportista.entity';
import { Cancha } from '../cancha/entities/cancha.entity'; 

@Module({
  imports: [
    TypeOrmModule.forFeature([SeparacionCancha, Deportista, Cancha]), 
  ],
  controllers: [SeparacionCanchaController], 
  providers: [SeparacionCanchaService], 
})
export class SeparacionCanchaModule {}
