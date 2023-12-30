import { Router } from 'express';
import{getTasks, getTask, createTask, updateTask, deleteTask, createDetalle, getDetalles, getDetalle, deleteeTasks} from '../controllers/task.controllers.js'

const router = Router();

router.get('/tasks', getTasks)

router.get('/tasks/:id', getTask)

router.post('/tasks', createTask)

router.put('/tasks/:id', updateTask)

router.delete('/tasks/:id', deleteTask)

router.delete('/deleteall', deleteeTasks)


router.get('/detalle', getDetalles)
router.get('/detalle/:id', getDetalle)
router.post('/detalle', createDetalle)

export default router;
