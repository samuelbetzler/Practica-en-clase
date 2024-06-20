import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CanchaModule } from './cancha/cancha.module';
import { DeportistaModule } from './deportista/deportista.module';
import { SeparacionCanchaModule } from './separacion-cancha/separacion-cancha.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'sam',
      password: '1234',
      database: 'deporte',
      autoLoadEntities: true,
      synchronize: true,
    }),
    CanchaModule,
    DeportistaModule,
    SeparacionCanchaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
