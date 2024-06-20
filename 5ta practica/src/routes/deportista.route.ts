import e, {Router, Request, Response} from 'express';
import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()
const router = Router();

//get all deportistas
router.get('/', async (req, res) => {
    const deportista = await prisma.deportista.findMany({
      where: {
        estado: {
          not: 'Eliminado'
        }
      }
    })
    res.json(deportista)
  })
  
//localhost:3000/deportista/1
router.get('/:id', async (req, res) => {
    const { id } = req.params
    const deportista = await prisma.deportista.findUnique({
      where: {
        id: parseInt(id)
      }
    })
    if (deportista && deportista.estado !== 'Eliminado') {
      res.json(deportista)
    } else {
      res.status(404).json({ message: 'Serie no encontrada o eliminada' })
    }
  })
//post deportista
router.post('/', async (req, res) => {
    const { nombre, identificacion, equipo } = req.body
    const deportista = await prisma.deportista.create({
      data: {
          nombre: nombre,
          identificacion: identificacion,
          equipo: equipo,
          estado: "Activo",
      }
    })
    res.json(deportista)
  })
  
//put deportista
router.put('/:id', async (req, res) => {
    const { id } = req.params
    const { nombre,identificacion,equipo , estado } = req.body
    const deportista = await prisma.deportista.update({
      where: {
        id: parseInt(id)
      },
      data: {
        nombre,
        identificacion,
        equipo,
        estado,
      }
    })
    res.json(deportista)
  })
//delete deportista
router.delete('/:id', async (req, res) => {
    const { id } = req.params
    const deportista = await prisma.deportista.update({
      where: {
        id: parseInt(id)
      },
      data: {
        estado: 'Eliminado'
      }
    })
    res.json(deportista)
  })

export default router;