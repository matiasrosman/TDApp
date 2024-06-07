const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./database/config');

const app = express();

// Base de datos
dbConnection();

//Middleware
app.use(cors());

//Directorio Público
app.use(express.static('public'));

//Lectura y parseo del body
app.use(express.json());

//Rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));

//Ruta no encontrada
app.use('*', (req, res) => {
    res.status(404).json({
        ok: false,
        msg: 'Ruta no encontrada'
    });
});

app.listen(process.env.PORT, () => {
    console.log(`Servidor ON: http://localhost:${process.env.PORT}/`);
});