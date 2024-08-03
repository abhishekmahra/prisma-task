import { Router } from 'express';
import { addToy, getToyByName, updateToy, deleteToy } from '../controllers/toyController';
import { authenticateToken } from '../middlewares/authenticateToken';

const router = Router();

router.post('/toys', authenticateToken, addToy);
router.get('/toys', getToyByName);
router.put('/toys/:id', authenticateToken, updateToy);
router.delete('/toys/:id', authenticateToken, deleteToy);

export default router;

