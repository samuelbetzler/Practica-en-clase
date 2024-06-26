import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cancha } from './entities/cancha.entity'; 
import { CanchaService } from './cancha.service';
import { CanchaResolver } from './cancha.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([Cancha]), 
  ],
  providers: [
    CanchaResolver,
    CanchaService,
  ],
  exports: [
    TypeOrmModule, 
  ],
})
export class CanchaModule {}
