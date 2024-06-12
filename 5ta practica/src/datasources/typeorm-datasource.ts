import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Cancha } from '../entities/typeorm/Cancha';
import { Deportista } from '../entities/typeorm/Deportista';
import { SeparacionCancha } from '../entities/typeorm/SeparacionCancha';

export const AppDataSource = new DataSource({
    type: 'postgres',
    url: process.env.DATABASE_URL,
    synchronize: true,
    logging: true,
    entities: [Cancha, Deportista, SeparacionCancha],
    migrations: [],
    subscribers: [],
});
