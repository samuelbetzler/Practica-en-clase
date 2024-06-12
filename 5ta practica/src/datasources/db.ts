import { Sequelize } from 'sequelize';
import { config } from '../config/env';

export const sequelize = new Sequelize(config.databaseUrl, {
    dialect: 'postgres',
    logging: false, 
});
