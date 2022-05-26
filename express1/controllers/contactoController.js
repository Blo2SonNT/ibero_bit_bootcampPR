const Contacto = require('../models/Contacto')

exports.crearContacto = async(req, res) => {
    try {
        let contacto
        contacto = new Contacto(req.body)
        await contacto.save()
        res.send(contacto)
    } catch (error) {
        console.log(error)
        res.status(500).send("Hay un problema")
    }
}
