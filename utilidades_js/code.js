// function saludo() {
//     //proceso
// }

// //funcion anonima

// () => {
//     //proceso
// }


// saludando = function(texto) {
//     console.log(texto)
// }

// saludame = () => {
//     //proceso
// }

console.log("este mensaje se muestra primero")
setTimeout(() => {
    console.log("Este se mostrara despues de 5 segundos")
}, 5000)
console.log("este mensaje se muestra segundo")


//THIS

const ejecucion = {
    numero: 15,
    nombre: "Jose",
    apellido: "perez",
    mi_funcion: function() {
        return this.numero
    }
}

console.log(ejecucion.mi_funcion())


// mi_funcion = function() {
//     return ejecucion.numero
// }

// console.log(mi_funcion())