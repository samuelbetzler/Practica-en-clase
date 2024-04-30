// src/utils/api.ts
import {Usuario} from '../entities/Usuario fetch';

// Función para obtener usuarios
async function obtenerUsuarios(): Promise<Usuario[]> {
    try {
        const response = await fetch('https://reqres.in/api/users');
        if (!response.ok) {
            throw new Error('No se pudo obtener la lista de usuarios.');
        }
        const data = await response.json();
        // Verifica si la respuesta cumple con la interfaz de Usuario
        if (Array.isArray(data.data)) {
            const usuarios: Usuario[] = data.data;
            return usuarios;
        } else {
            throw new Error('La respuesta no coincide con el formato esperado.');
        }
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
        return [];
    }
}

export { obtenerUsuarios };
