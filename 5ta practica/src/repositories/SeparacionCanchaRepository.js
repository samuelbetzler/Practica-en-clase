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
exports.SeparacionCanchaRepository = void 0;
const SeparacionCancha_1 = require("../entities/SeparacionCancha");
class SeparacionCanchaRepository {
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return SeparacionCancha_1.SeparacionCancha.findAll();
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return SeparacionCancha_1.SeparacionCancha.findByPk(id);
        });
    }
    create(separacion) {
        return __awaiter(this, void 0, void 0, function* () {
            return SeparacionCancha_1.SeparacionCancha.create(separacion);
        });
    }
    update(id, updateData) {
        return __awaiter(this, void 0, void 0, function* () {
            const separacion = yield SeparacionCancha_1.SeparacionCancha.findByPk(id);
            if (separacion) {
                return separacion.update(updateData);
            }
            return null;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const separacion = yield SeparacionCancha_1.SeparacionCancha.findByPk(id);
            if (separacion) {
                return separacion.destroy();
            }
            return null;
        });
    }
}
exports.SeparacionCanchaRepository = SeparacionCanchaRepository;
