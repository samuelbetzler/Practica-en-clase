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
const typeorm_datasource_1 = require("../../datasources/typeorm-datasource");
const Deportista_1 = require("../../entities/typeorm/Deportista");
class DeportistaRepository {
    constructor() {
        this.repository = typeorm_datasource_1.AppDataSource.getRepository(Deportista_1.Deportista);
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
    create(deportista) {
        return __awaiter(this, void 0, void 0, function* () {
            const newDeportista = this.repository.create(deportista);
            return this.repository.save(newDeportista);
        });
    }
    update(id, deportista) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.repository.update(id, deportista);
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
exports.DeportistaRepository = DeportistaRepository;
