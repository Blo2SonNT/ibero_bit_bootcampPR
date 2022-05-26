// console.log('texto de prueba para nodemon pepe')

const express = require('express');
const conectarBaseDeDatos = require('./config/db')

const aplicacion = express(); //llamado del servicio
conectarBaseDeDatos();

aplicacion.use(express.json());

aplicacion.use('/api', require('./routes/proyecto_rutas'))

aplicacion.listen(4000, () => {
    console.log("El servidor se esta ejecutando en el puerto 4000")
})
