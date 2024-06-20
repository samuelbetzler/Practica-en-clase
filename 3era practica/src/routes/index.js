"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.separacioncancha = exports.deportistaRouter = exports.canchaRouter = void 0;
const cancha_route_1 = __importDefault(require("./cancha.route"));
exports.canchaRouter = cancha_route_1.default;
const deportista_route_1 = __importDefault(require("./deportista.route"));
exports.deportistaRouter = deportista_route_1.default;
const separacioncancha_route_1 = __importDefault(require("./separacioncancha.route"));
exports.separacioncancha = separacioncancha_route_1.default;
