import { SeparacionCancha } from '../entities/SeparacionCancha';
// Función para eliminar una separación de cancha por su ID sin callback
// function eliminarSeparacionCanchaPorId(arr: SeparacionCancha[], id: number): SeparacionCancha[] {
//     const index = arr.findIndex(separacion => separacion.id === id);
//     if (index !== -1) {
//         arr.splice(index, 1);
//     }
//     return arr;
// }
// export { eliminarSeparacionCanchaPorId };
//-------------------------------------------------------------------------------------------------------------------
// Función para eliminar una separación de cancha por su ID con callback
type EliminarCallback = (eliminado: SeparacionCancha | null) => void;
function eliminarSeparacionCanchaPorId(arr: SeparacionCancha[], id: number, callback: EliminarCallback): SeparacionCancha[] {
    const index = arr.findIndex(separacion => separacion.id === id);
    let eliminado: SeparacionCancha | null = null;
    if (index !== -1) {
        eliminado = arr[index];
        arr.splice(index, 1);
    }
    callback(eliminado);
    return arr;
}

export { eliminarSeparacionCanchaPorId };
