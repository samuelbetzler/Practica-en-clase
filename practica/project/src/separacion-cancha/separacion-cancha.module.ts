import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeparacionCancha } from './entities/separacion-cancha.entity'; 
import { SeparacionCanchaService } from './separacion-cancha.service';
import { SeparacionCanchaResolver } from './separacion-cancha.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([SeparacionCancha])], 
  providers: [SeparacionCanchaResolver, SeparacionCanchaService],
  exports: [TypeOrmModule], 
})
export class SeparacionCanchaModule {}
