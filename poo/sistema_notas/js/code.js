// let BD = [
//     {
//         nombre: "Hugo",
//         apellido: "Mendez",
//         edad: 85,
//         correo: "hugo@correo.com",
//         pass: "123456"
//     },
//     {
//         nombre: "Zulma",
//         apellido: "Rodriguez",
//         edad: 25,
//         correo: "zulma@correo.com",
//         pass: "AmoLaProgramacion"
//     }
// ]

// localStorage.setItem("dataBase", JSON.stringify(BD))

// let Data = localStorage.getItem("dataBase")
// console.log(JSON.parse(Data))

let botonIngreso = document.querySelector("#loginBtn")
botonIngreso.addEventListener("click", () => {
    let correoInput = document.querySelector("#usuario").value
    let passInput = document.querySelector("#pass").value
    let classLogin = new Login(correoInput, passInput)
    classLogin.validarUsuario()
        // if (!validacion) {
        //     Swal.fire({
        //         icon: 'error',
        //         title: 'Los datos ingresados no concuerdan',
        //         text: 'Vuelva a intentarlo'
        //     })
        //     return
        // } else {
        //     window.location.href = "index.html";
        // }

})

// let classLogin = new Login("zulma@correo.com", "AmoLaProgramacion")
// console.log(classLogin.validarUsuario())

// let classLogin2 = new Login("hugo@correo.com", "123456")
// console.log(classLogin2.validarUsuario())