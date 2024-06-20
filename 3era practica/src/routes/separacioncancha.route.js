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
//get all separacionCancha
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const separacionCancha = yield prisma.separacionCancha.findMany({
        where: {
            estado: {
                not: 'Eliminado'
            }
        }
    });
    res.json(separacionCancha);
}));
//localhost:3000/separacionCancha/1
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const separacionCancha = yield prisma.separacionCancha.findUnique({
        where: {
            id: parseInt(id),
            estado: {
                not: 'Eliminado'
            }
        }
    });
    if (separacionCancha) {
        res.json(separacionCancha);
    }
    else {
        res.status(404).json({ message: 'Asignación no encontrada o eliminada' });
    }
}));
//post separacionCancha
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { canchaId, deportistaId, fechaSeparacion, horaDesde, horaHasta } = req.body;
    const separacionCancha = yield prisma.separacionCancha.create({
        data: {
            canchaId,
            deportistaId,
            fechaSeparacion,
            horaDesde,
            horaHasta,
            estado: 'Activo'
        }
    });
    res.json(separacionCancha);
}));
//put separacionCancha
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { canchaId, deportistaId, fechaSeparacion, horaDesde, horaHasta, estado } = req.body;
    const separacionCancha = yield prisma.separacionCancha.update({
        where: {
            id: parseInt(id)
        },
        data: {
            canchaId,
            deportistaId,
            fechaSeparacion,
            horaDesde,
            horaHasta,
            estado,
        }
    });
    res.json(separacionCancha);
}));
//delete    separacionCancha
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const separacionCancha = yield prisma.separacionCancha.update({
        where: {
            id: parseInt(id)
        },
        data: {
            estado: 'Eliminado' // Cambio de estado en lugar de eliminación física
        }
    });
    res.json(separacionCancha);
}));
exports.default = router;
