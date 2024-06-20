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
exports.deleteSeparacion = exports.updateSeparacion = exports.createSeparacion = exports.getSeparacionById = exports.getAllSeparaciones = void 0;
const SeparacionCanchaRepository_1 = require("../repositories/SeparacionCanchaRepository");
const separacionCanchaRepository = new SeparacionCanchaRepository_1.SeparacionCanchaRepository();
const getAllSeparaciones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const separaciones = yield separacionCanchaRepository.findAll();
    res.json(separaciones);
});
exports.getAllSeparaciones = getAllSeparaciones;
const getSeparacionById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id, 10);
    const separacion = yield separacionCanchaRepository.findById(id);
    if (separacion) {
        res.json(separacion);
    }
    else {
        res.status(404).json({ message: 'Separacion not found' });
    }
});
exports.getSeparacionById = getSeparacionById;
const createSeparacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newSeparacion = yield separacionCanchaRepository.create(req.body);
    res.status(201).json(newSeparacion);
});
exports.createSeparacion = createSeparacion;
const updateSeparacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id, 10);
    const updatedSeparacion = yield separacionCanchaRepository.update(id, req.body);
    if (updatedSeparacion) {
        res.json(updatedSeparacion);
    }
    else {
        res.status(404).json({ message: 'Separacion not found' });
    }
});
exports.updateSeparacion = updateSeparacion;
const deleteSeparacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id, 10);
    const deleted = yield separacionCanchaRepository.delete(id);
    if (deleted) {
        res.status(204).send();
    }
    else {
        res.status(404).json({ message: 'Separacion not found' });
    }
});
exports.deleteSeparacion = deleteSeparacion;
