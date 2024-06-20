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
const typeorm_datasource_1 = require("../../datasources/typeorm-datasource");
const SeparacionCancha_1 = require("../../entities/typeorm/SeparacionCancha");
class SeparacionCanchaRepository {
    constructor() {
        this.repository = typeorm_datasource_1.AppDataSource.getRepository(SeparacionCancha_1.SeparacionCancha);
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repository.find();
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repository.findOneBy({ id });
        });
    }
    create(separacion) {
        return __awaiter(this, void 0, void 0, function* () {
            const newSeparacion = this.repository.create(separacion);
            return this.repository.save(newSeparacion);
        });
    }
    update(id, separacion) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.repository.update(id, separacion);
            return this.findById(id);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.repository.delete(id);
            return result.affected !== 0;
        });
    }
}
exports.SeparacionCanchaRepository = SeparacionCanchaRepository;
