import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {

  async function eliminarSeparacionCancha(idSeparacionCancha: number) {
    try {
      // Buscar la separación de cancha por ID
      const separacionCancha = await prisma.separacionCancha.findUnique({
        where: {
          id: idSeparacionCancha,
        },
      });
  
      if (!separacionCancha) {
        throw new Error('La separación de cancha no fue encontrada.');
      }
  
      // Marcar la separación de cancha como eliminada lógicamente
      const separacionCanchaActualizada = await prisma.separacionCancha.update({
        where: {
          id: idSeparacionCancha,
        },
        data: {
          estado: false,
        },
      });
  
      return separacionCanchaActualizada;
    } catch (error) {
      console.error('Ocurrió un error al eliminar la separación de cancha:', error);
      throw error;
    } finally {
      await prisma.$disconnect();
    }
  }
  async function recuperarTransaccion(idTransaccion: number): Promise<void> {
    try {
      // Buscar la transacción por su ID
      const transaccion = await prisma.separacionCancha.findUnique({
        where: { id: idTransaccion },
      });
  
      if (!transaccion) {
        console.error(`No se encontró ninguna transacción con el ID ${idTransaccion}`);
        return;
      }
  
      // Actualizar el estado de la transacción a TRUE
      await prisma.separacionCancha.update({
        where: { id: idTransaccion },
        data: { estado: true },
      });
  
      console.log(`Transacción con ID ${idTransaccion} recuperada exitosamente.`);
    } catch (error) {
      console.error(`Error al recuperar la transacción: ${error}`);
    }
  }
  
  // Llamada a la función con el ID de la transacción
  const idTransaccion = 1; // Aquí debes colocar el ID de la transacción que deseas recuperar
  recuperarTransaccion(idTransaccion)
    .catch((error) => console.error(error))
    .finally(async () => {
      await prisma.$disconnect();
    });
  // Uso de la función
  // const idSeparacionCanchaAEliminar = 1; // Coloca aquí el ID de la separación de cancha que deseas eliminar
  // eliminarSeparacionCancha(idSeparacionCanchaAEliminar)
  //   .then(separacionCanchaEliminada => {
  //     console.log('Separación de cancha eliminada exitosamente:', separacionCanchaEliminada);
  //   })
  //   .catch(error => {
  //     console.error('Hubo un error al eliminar la separación de cancha:', error);
  //   });
  
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })