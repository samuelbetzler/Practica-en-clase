"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeparacionCancha = void 0;
// Definición del objeto SeparacionCancha
class SeparacionCancha {
    constructor(id, idCancha, idDeportista, fecha, horaDesde, horaHasta) {
        this.id = id;
        this.idCancha = idCancha;
        this.idDeportista = idDeportista;
        this.fecha = fecha;
        this.horaDesde = horaDesde;
        this.horaHasta = horaHasta;
    }
}
exports.SeparacionCancha = SeparacionCancha;
