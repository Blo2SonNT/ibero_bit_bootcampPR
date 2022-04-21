class Carro {
    nombre_modelo = ''
    imagen = ''
    color = ''
    caballos = ''

    constructor(modelo, url_imagen, color, potencia) {
        this.nombre_modelo = modelo
        this.imagen = url_imagen
        this.color = color
        this.caballos = potencia
    }

    crear_pagina() {
        return `
        <div style="background: url(${this.imagen}); height: 100vh; width: 100%;">
            <h1>${this.nombre_modelo}</h1>
            <p>Caballos de fuerza: ${this.caballos}</p>
            <p>Color: ${this.color}</p>
        </div>
        `
    }
}