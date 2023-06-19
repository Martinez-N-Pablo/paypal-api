//Frameworks
const express = require('express');
const cors = require('cors');
require('dotenv').config({path: '../.env'});

//Import database
const { dbConnection } = require('./api/v0.1/database/configdb');

const app = express();

dbConnection();

app.use(cors());
app.use(express.json());

/**
 * Redirije de manera dinamica todas las rutas
 * IMPORTANTE: NO HACE FALTA AÑADIR NINGUNA RUTA NUEVA
 */
app.use('/api', require('./api/v0.1/routes/index'));

app.listen(process.env.PORT, () => {
    console.log(`Backend running on PORT: ${process.env.PORT}`);
})
