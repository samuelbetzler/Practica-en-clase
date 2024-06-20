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
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        function eliminarSeparacionCancha(idSeparacionCancha) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    // Buscar la separación de cancha por ID
                    const separacionCancha = yield prisma.separacionCancha.findUnique({
                        where: {
                            id: idSeparacionCancha,
                        },
                    });
                    if (!separacionCancha) {
                        throw new Error('La separación de cancha no fue encontrada.');
                    }
                    // Marcar la separación de cancha como eliminada lógicamente
                    const separacionCanchaActualizada = yield prisma.separacionCancha.update({
                        where: {
                            id: idSeparacionCancha,
                        },
                        data: {
                            estado: false,
                        },
                    });
                    return separacionCanchaActualizada;
                }
                catch (error) {
                    console.error('Ocurrió un error al eliminar la separación de cancha:', error);
                    throw error;
                }
                finally {
                    yield prisma.$disconnect();
                }
            });
        }
        function recuperarTransaccion(idTransaccion) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    // Buscar la transacción por su ID
                    const transaccion = yield prisma.separacionCancha.findUnique({
                        where: { id: idTransaccion },
                    });
                    if (!transaccion) {
                        console.error(`No se encontró ninguna transacción con el ID ${idTransaccion}`);
                        return;
                    }
                    // Actualizar el estado de la transacción a TRUE
                    yield prisma.separacionCancha.update({
                        where: { id: idTransaccion },
                        data: { estado: true },
                    });
                    console.log(`Transacción con ID ${idTransaccion} recuperada exitosamente.`);
                }
                catch (error) {
                    console.error(`Error al recuperar la transacción: ${error}`);
                }
            });
        }
        // Llamada a la función con el ID de la transacción
        const idTransaccion = 1; // Aquí debes colocar el ID de la transacción que deseas recuperar
        recuperarTransaccion(idTransaccion)
            .catch((error) => console.error(error))
            .finally(() => __awaiter(this, void 0, void 0, function* () {
            yield prisma.$disconnect();
        }));
        // Uso de la función
        // const idSeparacionCanchaAEliminar = 1; // Coloca aquí el ID de la separación de cancha que deseas eliminar
        // eliminarSeparacionCancha(idSeparacionCanchaAEliminar)
        //   .then(separacionCanchaEliminada => {
        //     console.log('Separación de cancha eliminada exitosamente:', separacionCanchaEliminada);
        //   })
        //   .catch(error => {
        //     console.error('Hubo un error al eliminar la separación de cancha:', error);
        //   });
    });
}
main()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}))
    .catch((e) => __awaiter(void 0, void 0, void 0, function* () {
    console.error(e);
    yield prisma.$disconnect();
    process.exit(1);
}));
