import { Router } from 'express';
import { getAllCanchas, getCanchaById, createCancha, updateCancha, deleteCancha } from '../controllers/CanchaController';

const router = Router();

router.get('/', getAllCanchas);
router.get('/:id', getCanchaById);
router.post('/', createCancha);
router.put('/:id', updateCancha);
router.delete('/:id', deleteCancha);

export default router;
