if (sessionStorage.getItem('Usuario') == null) {
    window.location.href = 'login.html'
} else {
    let dataBD = localStorage.getItem('dataBase')
    dataBD = JSON.parse(dataBD)
    let posUsuario = sessionStorage.getItem('Usuario')
    let userNav = document.querySelector("#usuarioNav")
    userNav.innerHTML = `Bienvenido ${dataBD[posUsuario].nombre}`
}

let btnLogout = document.querySelector("#logout")
btnLogout.addEventListener("click", () => {
    let loginClass = new Login()
    loginClass.logoutSesion()
    window.location.href = 'login.html'
})