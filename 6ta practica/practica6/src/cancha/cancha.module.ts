import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CanchaService } from './cancha.service';
import { CanchaController } from './cancha.controller';
import { Cancha } from './entities/cancha.entity';
import { SeparacionCancha } from 'src/separacion-cancha/entities/separacion-cancha.entity'; // Asegúrate de importar la entidad SeparacionCancha si es necesario

@Module({
  imports: [
    TypeOrmModule.forFeature([Cancha, SeparacionCancha]), // Importa todas las entidades que quieres usar en este módulo
  ],
  controllers: [CanchaController], // Añade todos los controladores que pertenecen a este módulo
  providers: [CanchaService], // Añade todos los servicios que pertenecen a este módulo
})
export class CanchaModule {}
