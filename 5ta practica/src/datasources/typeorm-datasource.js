"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const Cancha_1 = require("../entities/typeorm/Cancha");
const Deportista_1 = require("../entities/typeorm/Deportista");
const SeparacionCancha_1 = require("../entities/typeorm/SeparacionCancha");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    url: process.env.DATABASE_URL,
    synchronize: true,
    logging: true,
    entities: [Cancha_1.Cancha, Deportista_1.Deportista, SeparacionCancha_1.SeparacionCancha],
    migrations: [],
    subscribers: [],
});
