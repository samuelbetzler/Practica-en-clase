import express from 'express';
import canchaRouter from './routes/CanchaRouter';
import deportistaRouter from './routes/DeportistaRouter';
import separacioncanchaRouter from './routes/SeparacionCanchaRouter';
import typeormCanchaRouter from './routes/typeorm/CanchaRouter';
import typeormDeportistaRouter from './routes/typeorm/DeportistaRouter';
import typeormSeparacioncanchaRouter from './routes/typeorm/SeparacionCanchaRouter';
import { config } from './config/env';
import { sequelize } from './datasources/db';
import { AppDataSource } from './datasources/typeorm-datasource';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas con Sequelize
app.use('/cancha', canchaRouter);
app.use('/deportista', deportistaRouter);
app.use('/separacioncancha', separacioncanchaRouter);

// Rutas con TypeORM
app.use('/typeorm/cancha', typeormCanchaRouter);
app.use('/typeorm/deportista', typeormDeportistaRouter);
app.use('/typeorm/separacioncancha', typeormSeparacioncanchaRouter);

const startServer = async () => {
    try {
        // Conectar a la base de datos con Sequelize
        await sequelize.authenticate();
        console.log('Database connected with Sequelize');

        await sequelize.sync({ force: true });
        console.log('Database synchronized with Sequelize');

        // Inicializar TypeORM
        await AppDataSource.initialize();
        console.log('Database connected with TypeORM');

        app.listen(config.port, () => {
            console.log(`Server is running on port ${config.port}`);
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

startServer();
