import { separacionesCancha } from './Data/separacionesCanchaData';
import { SeparacionCancha } from './entities/SeparacionCancha';
import { eliminarSeparacionCanchaPorId } from './utils/funciones';
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
const mostrarElementoEliminado = (eliminado: SeparacionCancha | null) => {
    if (eliminado !== null) {
        console.log("Elemento eliminado:");
        console.log(eliminado);
    } else {
        console.log("No se encontró ningún elemento con el ID proporcionado.");
    }
};

// Ejemplo de uso: eliminar una separación de cancha por su ID
const idAEliminar = 2;
const nuevasSeparacionesCancha = eliminarSeparacionCanchaPorId(separacionesCancha, idAEliminar, mostrarElementoEliminado);
console.log("Arreglo actualizado:");
console.log(nuevasSeparacionesCancha);
//--------------------------------------------------------------------------------------------------------------------------------
//Vamos a usar el fetch(API) de reqres.in para obtener una lista de usuarios
// src/index.ts
    import { obtenerUsuarios } from './utils/api fecth';
    // Llama a la función para obtener usuarios y muestra los resultados
    obtenerUsuarios()
        .then(usuarios => {
            console.log('Usuarios obtenidos:');
            console.log(usuarios);
        });
