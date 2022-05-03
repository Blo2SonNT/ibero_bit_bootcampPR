class Saludo {
    nombre = ''

    constructor(nombre) {
        this.nombre = nombre;
    }

    saludando() {
        return `Hola ${this.nombre}, como estas?`;
    }
}

let saludo_usuario = new Saludo("Sara");
console.log(saludo_usuario.saludando());

//------------------------------------------------------------------------
//------------------------------------------------------------------------


class SaludoComplejo extends Saludo {

    edad = '';
    profesion = '';

    constructor(nombre, edad, profesion) {
        super(nombre)
        this.edad = edad
        this.profesion = profesion
    }

    saludo_x_edad() {
        return `Hola ${this.nombre}, eres mayor de edad tienes permitido entrar`;
    }


}

let saludo2 = new SaludoComplejo("", )