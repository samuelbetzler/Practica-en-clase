import { Router } from 'express';
import { getAllDeportistas, getDeportistaById, createDeportista, updateDeportista, deleteDeportista } from '../controllers/DeportistaController';

const router = Router();

router.get('/', getAllDeportistas);
router.get('/:id', getDeportistaById);
router.post('/', createDeportista);
router.put('/:id', updateDeportista);
router.delete('/:id', deleteDeportista);

export default router;
