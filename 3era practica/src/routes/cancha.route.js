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
//get all canchas
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const cancha = yield prisma.cancha.findMany({
        where: {
            estado: {
                not: 'Eliminado'
            }
        }
    });
    res.json(cancha);
}));
//localhost:3000/cancha/1
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const cancha = yield prisma.cancha.findUnique({
        where: {
            id: parseInt(id)
        }
    });
    if (cancha && cancha.estado !== 'Eliminado') {
        res.json(cancha);
    }
    else {
        res.status(404).json({ message: 'Cancha no encontrada o eliminada' });
    }
}));
//post cancha
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { descripcion } = req.body;
    const cancha = yield prisma.cancha.create({
        data: {
            descripcion: descripcion,
            estado: "Activo",
        }
    });
    res.json(cancha);
}));
//put cancha
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { descripcion, estado } = req.body;
    const cancha = yield prisma.cancha.update({
        where: {
            id: parseInt(id)
        },
        data: {
            descripcion,
            estado,
        }
    });
    res.json(cancha);
}));
//delete cancha
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const cancha = yield prisma.cancha.update({
        where: {
            id: parseInt(id)
        },
        data: {
            estado: 'Eliminado' // Cambio de estado en lugar de eliminación física
        }
    });
    res.json(cancha);
}));
exports.default = router;
