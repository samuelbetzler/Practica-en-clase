import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS para permitir peticiones desde otros dominios
  app.enableCors();

  // Establecer prefijo global para todas las rutas de la API
  app.setGlobalPrefix('api');

  
  // Configurar tubería de validación global
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Eliminar propiedades no definidas en DTOs
      forbidNonWhitelisted: true, // Rechazar solicitudes con propiedades no definidas en DTOs
      transform: true, // Transformar automáticamente tipos de datos de las solicitudes
    }),
  );

  // Escuchar en el puerto 3000
  await app.listen(3000);
}
bootstrap();
