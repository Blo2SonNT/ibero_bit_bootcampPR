const mongoose = require('mongoose')

const contactoSchema = mongoose.Schema({
    correo: {
        type: string,
        required: true
    },
    nombre: {
        type: string,
        required: true
    },
    direccion: {
        type: string,
        required: true
    },
    ciudad: {
        type: string,
        required: true
    },
    mensaje: {
        type: string,
        required: true
    },
    edad: {
        type: number,
        required: true
    },
})

module.exports = mongoose.model("contacto", contactoSchema)
