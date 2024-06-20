"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeparacionCancha = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../datasources/db");
const Cancha_1 = require("./Cancha");
const Deportista_1 = require("./Deportista");
class SeparacionCancha extends sequelize_1.Model {
}
exports.SeparacionCancha = SeparacionCancha;
SeparacionCancha.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    canchaId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Cancha_1.Cancha,
            key: 'id',
        },
    },
    deportistaId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Deportista_1.Deportista,
            key: 'id',
        },
    },
    fechaSeparacion: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    horaDesde: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    horaHasta: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    estado: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Activo',
    },
}, {
    sequelize: db_1.sequelize,
    modelName: 'SeparacionCancha',
});
