for (let edadForm = 15; edadForm <= 90; edadForm++) {
    document.querySelector('#edad_usuario').innerHTML += `
    <option value="${edadForm}">${edadForm}</option>
    `
}

let botonRegistro = document.querySelector("#btn_registro")
botonRegistro.addEventListener("click", () => {
    let correo = document.querySelector('#correo_usuario').value
    let pass = document.querySelector('#pass_usuario').value
    let verifyPass = document.querySelector('#verify_pass_usuario').value
    let nombre = document.querySelector('#nombre_usuario').value
    let edad = document.querySelector('#edad_usuario').value
    let tycCheck = document.querySelector('#tyc_usuario')

    if (tycCheck.checked) {
        tycCheck = true
    } else {
        tycCheck = false
        Swal.fire({
            icon: 'error',
            title: 'Acepte terminos y condiciones'
        })
        return;
    }

    if (pass == verifyPass && tycCheck) {
        console.log("si entro")
            // tycCheck = (tycCheck.checked) ? true : false
        let classRegistro = new Registro(correo, pass, nombre, edad, tycCheck)
        let validacion_usuario = classRegistro.validar_nvo_us()
        let dataBD = localStorage.getItem("dataBase")
        dataBD = JSON.parse(dataBD)
        if (validacion_usuario == dataBD.length) {
            let dataRegistro = {
                nombre: nombre,
                edad: edad,
                correo: correo,
                pass: pass
            }
            classRegistro.registroUsuarioBD(dataRegistro)
        }

    } else {
        Swal.fire({
            icon: 'error',
            title: 'Las contraseñas ingresadas no concuerdan'
        })
    }

})