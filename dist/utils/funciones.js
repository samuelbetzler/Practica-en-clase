"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarSeparacionCanchaPorId = void 0;
function eliminarSeparacionCanchaPorId(arr, id, callback) {
    const index = arr.findIndex(separacion => separacion.id === id);
    let eliminado = null;
    if (index !== -1) {
        eliminado = arr[index];
        arr.splice(index, 1);
    }
    callback(eliminado);
    return arr;
}
exports.eliminarSeparacionCanchaPorId = eliminarSeparacionCanchaPorId;
