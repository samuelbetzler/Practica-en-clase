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
exports.CanchaRepository = void 0;
// repositories/CanchaRepository.ts
const Cancha_1 = require("../entities/Cancha");
class CanchaRepository {
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return Cancha_1.Cancha.findAll();
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return Cancha_1.Cancha.findByPk(id);
        });
    }
    create(cancha) {
        return __awaiter(this, void 0, void 0, function* () {
            return Cancha_1.Cancha.create(cancha);
        });
    }
    update(id, updateData) {
        return __awaiter(this, void 0, void 0, function* () {
            const cancha = yield Cancha_1.Cancha.findByPk(id);
            if (cancha) {
                return cancha.update(updateData);
            }
            return null;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const cancha = yield Cancha_1.Cancha.findByPk(id);
            if (cancha) {
                return cancha.destroy();
            }
            return null;
        });
    }
}
exports.CanchaRepository = CanchaRepository;
