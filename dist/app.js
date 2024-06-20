"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const separacionesCanchaData_1 = require("./Data/separacionesCanchaData");
const funciones_1 = require("./utils/funciones");
// Mostrar los objetos SeparacionCancha
// separacionesCancha.forEach((separacion: SeparacionCancha) => {
//     console.log(separacion);
// });
// Llama a la función para eliminar una separación de cancha por su ID sin callback
// const idAEliminar = 2;
// const nuevasSeparacionesCancha = eliminarSeparacionCanchaPorId(separacionesCancha, idAEliminar);
// console.log(nuevasSeparacionesCancha);
//--------------------------------------------------------------------------------------------------------------------------------
// Función de callback para mostrar el elemento eliminado por consola
const mostrarElementoEliminado = (eliminado) => {
    if (eliminado !== null) {
        console.log("Elemento eliminado:");
        console.log(eliminado);
    }
    else {
        console.log("No se encontró ningún elemento con el ID proporcionado.");
    }
};
// Ejemplo de uso: eliminar una separación de cancha por su ID
const idAEliminar = 2;
const nuevasSeparacionesCancha = (0, funciones_1.eliminarSeparacionCanchaPorId)(separacionesCanchaData_1.separacionesCancha, idAEliminar, mostrarElementoEliminado);
console.log("Arreglo actualizado:");
console.log(nuevasSeparacionesCancha);
//--------------------------------------------------------------------------------------------------------------------------------
//Vamos a usar el fetch(API) de reqres.in para obtener una lista de usuarios
// src/index.ts
const api_fecth_1 = require("./utils/api fecth");
// Llama a la función para obtener usuarios y muestra los resultados
(0, api_fecth_1.obtenerUsuarios)()
    .then(usuarios => {
    console.log('Usuarios obtenidos:');
    console.log(usuarios);
});
