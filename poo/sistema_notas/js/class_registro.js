class Registro extends Login {
    nombre = ''
    edad = ''
    correo = ''
    tyc = ''
    contrasena = ''

    constructor(correo, contrasena, nombre, edad, tyc) {
        super(correo)
        this.contrasena = contrasena
        this.nombre = nombre
        this.edad = edad
        this.correo = correo
        this.tyc = tyc
    }

    validar_nvo_us() {
        let pos_usuario = this.validarCorreo()
        return pos_usuario
    }


    registroUsuarioBD(data) {
        let BDUsuarios = localStorage.getItem("dataBase")
        BDUsuarios = JSON.parse(BDUsuarios)
        BDUsuarios.push(data)
        localStorage.setItem("dataBase", JSON.stringify(BDUsuarios))
        return true
    }

    // registroUsuarioBD(data) {
    //     let dataUsuarios = []
    //     let BDUsuarios = localStorage.getItem("dataBase")
    //     BDUsuarios = JSON.parse(BDUsuarios)
    //     for (const usuario of BDUsuarios) {
    //         dataUsuarios.push(usuario)
    //         console.log(dataUsuarios)
    //     }
    //     dataUsuarios.push(data)
    // }


}
/*
operador spread
let prueba = [1,5,9,7,8]

console.log(prueba)
(5) [1, 5, 9, 7, 8]

console.log(...prueba)
1 1 5 9 7 8

*/