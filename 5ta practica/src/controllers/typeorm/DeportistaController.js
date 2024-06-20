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
exports.deleteDeportista = exports.updateDeportista = exports.createDeportista = exports.getDeportistaById = exports.getAllDeportistas = void 0;
const DeportistaRepository_1 = require("../../repositories/typeorm/DeportistaRepository");
const deportistaRepository = new DeportistaRepository_1.DeportistaRepository();
const getAllDeportistas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deportistas = yield deportistaRepository.findAll();
    res.json(deportistas);
});
exports.getAllDeportistas = getAllDeportistas;
const getDeportistaById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id, 10);
    const deportista = yield deportistaRepository.findById(id);
    if (deportista) {
        res.json(deportista);
    }
    else {
        res.status(404).json({ message: 'Deportista not found' });
    }
});
exports.getDeportistaById = getDeportistaById;
const createDeportista = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newDeportista = yield deportistaRepository.create(req.body);
    res.status(201).json(newDeportista);
});
exports.createDeportista = createDeportista;
const updateDeportista = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id, 10);
    const updatedDeportista = yield deportistaRepository.update(id, req.body);
    if (updatedDeportista) {
        res.json(updatedDeportista);
    }
    else {
        res.status(404).json({ message: 'Deportista not found' });
    }
});
exports.updateDeportista = updateDeportista;
const deleteDeportista = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id, 10);
    const deleted = yield deportistaRepository.delete(id);
    if (deleted) {
        res.status(204).send();
    }
    else {
        res.status(404).json({ message: 'Deportista not found' });
    }
});
exports.deleteDeportista = deleteDeportista;
