const express = require('express');
const {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
  createDetalle,
  getDetalles,
  getDetalle,
  deleteeTasks
} = require('../controllers/task.controllers.js');

const router = express.Router();

router.get('/tasks', getTasks);

router.get('/tasks/:id', getTask);

router.post('/tasks', createTask);

router.put('/tasks/:id', updateTask);

router.delete('/tasks/:id', deleteTask);

router.delete('/deleteall', deleteeTasks);

router.get('/detalle', getDetalles);
router.get('/detalle/:id', getDetalle);
router.post('/detalle', createDetalle);

module.exports = router;
