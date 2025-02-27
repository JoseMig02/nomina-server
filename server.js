const express = require('express');
const sequelize = require('./config/db');
const pagosRoutes = require('./routes/pagos');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use('/pagos', pagosRoutes);

sequelize.sync().then(() => {
  console.log('Base de datos sincronizada');
});
const PORT  = process.env.PORT || 3000;
app.listen(PORT || 3000, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});