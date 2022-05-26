const mongoose = require('mongoose')

const contactoSchema = mongoose.Schema({
    correo: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    ciudad: {
        type: String,
        required: true
    },
    mensaje: {
        type: String,
        required: true
    },
    edad: {
        type: Number,
        required: true
    },
    fec_cre: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("contacto", contactoSchema)
