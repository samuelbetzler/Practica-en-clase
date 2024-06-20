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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeportistaRepository = void 0;
const Deportista_1 = require("../entities/Deportista");
class DeportistaRepository {
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return Deportista_1.Deportista.findAll();
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return Deportista_1.Deportista.findByPk(id);
        });
    }
    create(deportista) {
        return __awaiter(this, void 0, void 0, function* () {
            return Deportista_1.Deportista.create(deportista);
        });
    }
    update(id, updateData) {
        return __awaiter(this, void 0, void 0, function* () {
            const deportista = yield Deportista_1.Deportista.findByPk(id);
            if (deportista) {
                return deportista.update(updateData);
            }
            return null;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const deportista = yield Deportista_1.Deportista.findByPk(id);
            if (deportista) {
                return deportista.destroy();
            }
            return null;
        });
    }
}
exports.DeportistaRepository = DeportistaRepository;
