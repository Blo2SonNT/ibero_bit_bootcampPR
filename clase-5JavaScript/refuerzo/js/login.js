function validar_formulario() {
    var correo1 = document.getElementById("correo").value
    var contrasena1 = document.getElementById("contrasena").value
    console.log(correo1 + " " + contrasena1)
    var usuario = "pepito@gmail.com"
    var pass = "contrasena123"
    if (correo1 == usuario && contrasena1 == pass) {
        confirm("bienvenido")
    } else if (correo1 == "admin@correo.com" && contrasena1 == "admin3") {
        alert("👍")
    } else {
        alert("burro")
    }

}


for (let index = 0; index < array.length; index++) {
    const element = array[index];

}

while (x < 3) {

}