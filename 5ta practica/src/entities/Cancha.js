"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cancha = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../datasources/db");
class Cancha extends sequelize_1.Model {
}
exports.Cancha = Cancha;
Cancha.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    descripcion: {
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
    modelName: 'Cancha',
});
