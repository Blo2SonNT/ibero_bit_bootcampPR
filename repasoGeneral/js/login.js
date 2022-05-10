let BaseDatos = [{
        id: 1,
        nombre: "Frailejon Hernesto",
        apellido: "Perez",
        correo: "frailejonHernesto@correo.com",
        usuario: "FHP",
        documento: "94849233",
        edad: 25,
        activo: true,
        hijos: ["pepe", "frijol", "cubio"],
        password: "123"
    },
    {
        id: 2,
        nombre: "Fulano",
        apellido: "Mendez",
        correo: "fulano@correo.com",
        usuario: "mendezPP",
        documento: "6489059",
        edad: 68,
        activo: false,
        password: "ElViejo"
    },
]


if (localStorage.getItem("DB") == null) {
    localStorage.setItem("DB", JSON.stringify(BaseDatos))
}

// let contador = 0
// while (contador <= 100) {
//     contador++
//     console.log(contador)
// }

// for (let contador = 0; contador <= 100; contador = contador + 2) {
//     console.warn(contador)
// }

// prueba.forEach((usuario, indice) => {
//     usuario.hijos.forEach(hijo => {
//         console.log(hijo)
//     });
//     console.log(usuario.nombre)
// });


// for (const usuario of prueba) {
//     console.log(usuario)
// }
/*
# id
. class
body
[]
*/

let btnLoginForm = document.querySelector("#btnLogin")
console.log(btnLoginForm)
btnLoginForm.addEventListener("click", () => {

    let userFormLogin = document.querySelector("#userLogin").value
    let passFormLogin = document.querySelector("#passLogin").value
    let prueba = localStorage.getItem("DB")
    prueba = JSON.parse(prueba)
    prueba.forEach((usuarioBD, indiceDelArray) => {
        if (usuarioBD.correo == userFormLogin || usuarioBD.usuario == userFormLogin) {
            if (usuarioBD.password == passFormLogin) {
                console.log("pass")
                sessionStorage.setItem("posicionBD", indiceDelArray)
            }
        }
    });
})

function vistaLogin(color, alerta = false) {
    let form = document.querySelector("#formLogin")
    form.classList.add(color)
    if (alerta) {
        alert("Bienvenido")
    }
}

vistaLogin("bg-degrade")

/*
[]
"" | '' | ``
{key:"valor"}
true | false
85 | 85.2
*/
//