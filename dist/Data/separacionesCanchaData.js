"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.separacionesCancha = void 0;
const SeparacionCancha_1 = require("../entities/SeparacionCancha");
// Crear un arreglo de objetos SeparacionCancha
const separacionesCancha = [
    new SeparacionCancha_1.SeparacionCancha(1, 1, 101, new Date(2024, 4, 30), '08:00', '10:00'),
    new SeparacionCancha_1.SeparacionCancha(2, 2, 102, new Date(2024, 4, 30), '10:00', '12:00'),
    new SeparacionCancha_1.SeparacionCancha(3, 3, 103, new Date(2024, 4, 30), '12:00', '14:00')
];
exports.separacionesCancha = separacionesCancha;
