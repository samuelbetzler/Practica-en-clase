import { Module } from '@nestjs/common';
import { SeparacionCanchaService } from './separacion-cancha.service';
import { SeparacionCanchaGateway } from './separacion-cancha.gateway';

@Module({
  providers: [SeparacionCanchaGateway, SeparacionCanchaService],
})
export class SeparacionCanchaModule {}