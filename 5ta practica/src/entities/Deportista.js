"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deportista = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../datasources/db");
class Deportista extends sequelize_1.Model {
}
exports.Deportista = Deportista;
Deportista.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    identificacion: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    equipo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    estado: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Activo',
    },
}, {
    sequelize: db_1.sequelize,
    modelName: 'Deportista',
});
