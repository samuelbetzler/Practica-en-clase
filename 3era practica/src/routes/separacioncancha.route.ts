import e, {Router, Request, Response} from 'express';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const router = Router();

//get all separacionCancha
router.get('/', async (req, res) => {
    const separacionCancha = await prisma.separacionCancha.findMany({
      where: {
        estado: {
          not: 'Eliminado'
        }
      }
    })
    res.json(separacionCancha)
  })
//localhost:3000/separacionCancha/1
router.get('/:id', async (req, res) => {
    const { id } = req.params
    const separacionCancha = await prisma.separacionCancha.findUnique({
      where: {
        id: parseInt(id),
        estado: {
          not: 'Eliminado'
        }
      }
    })
    if (separacionCancha) {
      res.json(separacionCancha)
    } else {
      res.status(404).json({ message: 'Asignación no encontrada o eliminada' })
    }
  })
//post separacionCancha
router.post('/', async (req, res) => {
    const { canchaId, deportistaId,fechaSeparacion,horaDesde,horaHasta } = req.body
    const separacionCancha = await prisma.separacionCancha.create({
      data: {
        canchaId,
        deportistaId,
        fechaSeparacion,
        horaDesde,
        horaHasta,
        estado: 'Activo'
      }
    })
    res.json(separacionCancha)
  })
  
//put separacionCancha
router.put('/:id', async (req, res) => {
    const { id } = req.params
    const { canchaId, deportistaId,fechaSeparacion,horaDesde,horaHasta ,estado } = req.body
    const separacionCancha = await prisma.separacionCancha.update({
      where: {
        id: parseInt(id)
      },
      data: {
        canchaId,
        deportistaId,
        fechaSeparacion,
        horaDesde,
        horaHasta,
        estado,
      }
    })
    res.json(separacionCancha)
  })
  
//delete    separacionCancha
router.delete('/:id', async (req, res) => {
    const { id } = req.params
    const separacionCancha = await prisma.separacionCancha.update({
      where: {
        id: parseInt(id)
      },
      data: {
        estado: 'Eliminado' // Cambio de estado en lugar de eliminación física
      }
    })
    res.json(separacionCancha)
  })
  

export default router;