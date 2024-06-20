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
exports.obtenerUsuarios = void 0;
// Función para obtener usuarios
function obtenerUsuarios() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch('https://reqres.in/api/users');
            if (!response.ok) {
                throw new Error('No se pudo obtener la lista de usuarios.');
            }
            const data = yield response.json();
            // Verifica si la respuesta cumple con la interfaz de Usuario
            if (Array.isArray(data.data)) {
                const usuarios = data.data;
                return usuarios;
            }
            else {
                throw new Error('La respuesta no coincide con el formato esperado.');
            }
        }
        catch (error) {
            console.error('Error al obtener usuarios:', error);
            return [];
        }
    });
}
exports.obtenerUsuarios = obtenerUsuarios;
