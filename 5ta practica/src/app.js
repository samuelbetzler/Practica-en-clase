"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const CanchaRouter_1 = __importDefault(require("./routes/CanchaRouter"));
const DeportistaRouter_1 = __importDefault(require("./routes/DeportistaRouter"));
const SeparacionCanchaRouter_1 = __importDefault(require("./routes/SeparacionCanchaRouter"));
const CanchaRouter_2 = __importDefault(require("./routes/typeorm/CanchaRouter"));
const DeportistaRouter_2 = __importDefault(require("./routes/typeorm/DeportistaRouter"));
const SeparacionCanchaRouter_2 = __importDefault(require("./routes/typeorm/SeparacionCanchaRouter"));
const env_1 = require("./config/env");
const db_1 = require("./datasources/db");
const typeorm_datasource_1 = require("./datasources/typeorm-datasource");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Rutas con Sequelize
app.use('/cancha', CanchaRouter_1.default);
app.use('/deportista', DeportistaRouter_1.default);
app.use('/separacioncancha', SeparacionCanchaRouter_1.default);
// Rutas con TypeORM
app.use('/typeorm/cancha', CanchaRouter_2.default);
app.use('/typeorm/deportista', DeportistaRouter_2.default);
app.use('/typeorm/separacioncancha', SeparacionCanchaRouter_2.default);
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Conectar a la base de datos con Sequelize
        yield db_1.sequelize.authenticate();
        console.log('Database connected with Sequelize');
        yield db_1.sequelize.sync({ force: true });
        console.log('Database synchronized with Sequelize');
        // Inicializar TypeORM
        yield typeorm_datasource_1.AppDataSource.initialize();
        console.log('Database connected with TypeORM');
        app.listen(env_1.config.port, () => {
            console.log(`Server is running on port ${env_1.config.port}`);
        });
    }
    catch (error) {
        console.error('Unable to connect to the database:', error);
    }
});
startServer();
