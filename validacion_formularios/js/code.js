let validacion_correo = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    // valoresAceptados = /^[0-9]+$/;
let boton = document.querySelector("#btn-form")
boton.addEventListener("click", () => {
    let correo = document.querySelector("#correo_usuario").value
    if (!validacion_correo.test(correo)) {
        // alert("Correo invalido")
        document.querySelector("#espacio_correo").innerHTML += `<span class="text-danger">Correo Invalido</span>`
    }
})