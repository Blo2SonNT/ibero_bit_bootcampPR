class Saludo {
    nombre = ''

    constructor(nombre_usuario) {
        this.nombre = nombre_usuario
    }

    saludando() {
        return `Hola ${this.nombre}, como estas?`
    }
}


let saludo_pagina = new Saludo("Josele")
console.log(saludo_pagina.saludando())