// var nombre = "freddy"
// let apellido = "nieto"
// console.log("%chola mundo", "color: red; font-size: 3rem")
// console.log(nombre)

// console.log(`Hola ${nombre}, como estas?`)
// console.log("Hola " + nombre + ", como estas?")


/*
cometario
en
bloque
*/


// comentario de linea

// var nombre = "fulano"
// apellido = "perez"
// const cedula = "946165186"
// console.log(nombre)

// let estudiantes = ['juan', 'sara', 'freddy', 'yofrey', 59, true]
// debugger
// let nombreUser = prompt("cual es su nombre?")

// let apellidoUser = prompt("cual es su apellido?")

// let edadUser = prompt("cual es su edad?")

// let correoUser = prompt("cual es su correo?")

// function Saludar(nombre_user, apellidito) {
//     return `hola ${nombre_user} ${apellidito}`
// }

// function datos(edad_User, correo_User) {
//     return `informacion adicional ${edad_User} ${correo_User}`
// }

// console.log(Saludar(nombreUser, apellidoUser))

// console.log(datos(edadUser, correoUser))


// alert("hola, soy una alerta :D")


// let tituloHtml = document.getElementById("titulo")
// tituloHtml.classList.add('text-center', 'tiulo-color')

// let tituloHtml = document.querySelectorAll(".mi-titulo")
// console.log(tituloHtml)

// // document.write('hola')
// var contenidoHtml = document.querySelector("#contenido")

// contenidoHtml.innerHTML = `
//     <h1 >Hola mundo</h1>
//     <p class="fw-bold">Hoy la clase es virtual</p>

// `

// var cartasContainer = document.querySelector('#contenido')
// console.log(cartasContainer)

// cartasContainer.innerHTML = `
// <div class="col">
//     <div class="card">
//       <div class="card-body">
//         <h5 class="card-title">Card title</h5>
//         <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//       </div>
//     </div>
//   </div>
// `



function cambia_alerta() {
    let alertaHtml = document.querySelector("#alerta")
    alertaHtml.classList.remove('alert-danger')
    alertaHtml.classList.add('alert-success')
    alertaHtml.innerHTML = `tarea completada`
}

function validar_formulario() {
    var formHtml = document.getElementById("formulario")
    formHtml.innerHTML += `
        <div class="alert alert-danger mt-2" role="alert" id="alerta">
            Llene todos los campos del formulario
        </div>
    `
}

function lista() {
    let numeroUsuario = prompt("Hasta que numero desea la lista?")
    let divNumeros = document.querySelector("#listaNumeros")
    for (let x = 1; x <= numeroUsuario; x++) {
        divNumeros.innerHTML += `
        <div class="alert alert-dark" role="alert">
            ${x}
        </div>
        `
    }
}

//ciclos y condicionales
// var y = 5
// while (y <= 100) {
//     console.log(y)
//     y = parseInt(y) + 5
// }