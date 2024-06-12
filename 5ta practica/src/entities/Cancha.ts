import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../datasources/db';

export class Cancha extends Model {
    public id!: number;
    public descripcion!: string;
    public estado!: string;
}

Cancha.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    descripcion: {
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
    modelName: 'Cancha',
});
