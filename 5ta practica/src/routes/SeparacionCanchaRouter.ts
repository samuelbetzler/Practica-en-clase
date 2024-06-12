import { Router } from 'express';
import { getAllSeparaciones, getSeparacionById, createSeparacion, updateSeparacion, deleteSeparacion } from '../controllers/SeparacionCanchaController';

const router = Router();

router.get('/', getAllSeparaciones);
router.get('/:id', getSeparacionById);
router.post('/', createSeparacion);
router.put('/:id', updateSeparacion);
router.delete('/:id', deleteSeparacion);

export default router;
