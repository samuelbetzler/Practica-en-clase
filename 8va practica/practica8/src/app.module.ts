import { Module } from '@nestjs/common';
import { SeparacionCanchaModule } from './separacion-cancha/separacion-cancha.module';

@Module({
  imports: [SeparacionCanchaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}