const express = require("express");
const cors = require("cors");
const PORT = require('./config.js');
const indexRoutes = require('./routes/index.routes.js');
const taskRoutes = require('./routes/task.routers.js');

const app = express();
app.use(cors());
app.use(express.json());

app.use(indexRoutes);
app.use(taskRoutes);
app.listen(PORT);
console.log('server se ejecuta en el puerto 3000');
