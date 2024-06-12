import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../datasources/db';
import { Cancha } from './Cancha';
import { Deportista } from './Deportista';

export class SeparacionCancha extends Model {
    public id!: number;
    public canchaId!: number;
    public deportistaId!: number;
    public fechaSeparacion!: Date;
    public horaDesde!: Date;
    public horaHasta!: Date;
    public estado!: string;
}

SeparacionCancha.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    canchaId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Cancha,
            key: 'id',
        },
    },
    deportistaId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Deportista,
            key: 'id',
        },
    },
    fechaSeparacion: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    horaDesde: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    horaHasta: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    estado: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Activo',
    },
}, {
    sequelize,
    modelName: 'SeparacionCancha',
});
