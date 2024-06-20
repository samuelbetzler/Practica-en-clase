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
const express_1 = require("express");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const router = (0, express_1.Router)();
//get all deportistas
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deportista = yield prisma.deportista.findMany({
        where: {
            estado: {
                not: 'Eliminado'
            }
        }
    });
    res.json(deportista);
}));
//localhost:3000/deportista/1
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const deportista = yield prisma.deportista.findUnique({
        where: {
            id: parseInt(id)
        }
    });
    if (deportista && deportista.estado !== 'Eliminado') {
        res.json(deportista);
    }
    else {
        res.status(404).json({ message: 'Serie no encontrada o eliminada' });
    }
}));
//post deportista
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, identificacion, equipo } = req.body;
    const deportista = yield prisma.deportista.create({
        data: {
            nombre: nombre,
            identificacion: identificacion,
            equipo: equipo,
            estado: "Activo",
        }
    });
    res.json(deportista);
}));
//put deportista
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { nombre, identificacion, equipo, estado } = req.body;
    const deportista = yield prisma.deportista.update({
        where: {
            id: parseInt(id)
        },
        data: {
            nombre,
            identificacion,
            equipo,
            estado,
        }
    });
    res.json(deportista);
}));
//delete deportista
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const deportista = yield prisma.deportista.update({
        where: {
            id: parseInt(id)
        },
        data: {
            estado: 'Eliminado'
        }
    });
    res.json(deportista);
}));
exports.default = router;
