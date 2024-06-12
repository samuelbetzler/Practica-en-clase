import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../datasources/db';

export class Deportista extends Model {
    public id!: number;
    public nombre!: string;
    public identificacion!: string;
    public equipo!: string;
    public estado!: string;
}

Deportista.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    identificacion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    equipo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    estado: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Activo',
    },
}, {
    sequelize,
    modelName: 'Deportista',
});
