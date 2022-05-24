let miFormulario = document.querySelector("#dataFormularioUsuario")
let botonForm = document.querySelector("#btnEnviar")


botonForm.addEventListener('click', (e) => {
    e.preventDefault();
    let formInfo = new FormData(miFormulario)
    formInfo.append("idUsuario", "3")
    formInfo.delete("ccpostal")
    console.log(...formInfo.entries())
    console.log(formInfo.get("correo"))

})