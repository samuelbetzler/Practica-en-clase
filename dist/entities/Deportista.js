"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deportista = void 0;
//Definimos la clase Deportista con sus atributos id, nombre, identificacion y Equipo_que_representa
class Deportista {
    constructor(id, nombre, identificacion, Equipo_que_representa) {
        this.id = id;
        this.nombre = nombre;
        this.identificacion = identificacion;
        this.Equipo_que_representa = Equipo_que_representa;
    }
}
exports.Deportista = Deportista;
