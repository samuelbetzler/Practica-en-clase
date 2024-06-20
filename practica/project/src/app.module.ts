import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CanchaModule } from './cancha/cancha.module';
import { DeportistaModule } from './deportista/deportista.module';
import { SeparacionCanchaModule } from './separacion-cancha/separacion-cancha.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT, 10) || 5432,
      username: process.env.DB_USERNAME || 'sam',
      password: process.env.DB_PASSWORD || '1234',
      database: process.env.DB_NAME || 'deporte',
      synchronize: true,
      autoLoadEntities: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true, // Cambiar a true para ambiente de desarrollo
      plugins: [
        ApolloServerPluginLandingPageLocalDefault()
      ],
    }),
    CanchaModule,
    DeportistaModule,
    SeparacionCanchaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
