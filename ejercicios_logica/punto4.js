let menu = [
    "combo pizza",
    "de carnes",
    "de pollo",
    "de piña",
    "coca-cola",
    "jugo de naranja"
]

let precios = [
    15000,
    8000,
    8500,
    5500,
    3200,
    4000
]

let ul_div = document.querySelector("#menu")

menu.forEach((comida) => {
    ul_div.innerHTML += ` <li class="list-group-item">${comida}</li>`
})

var boton = document.querySelector("#boton_pedido")
boton.addEventListener("click", () => {
    let pedido_usuario = document.querySelector("#comida_pedido").value
    let posicion_menu = 0
    switch (pedido_usuario) {
        case "pagar":
            if (localStorage.getItem("precio_total") > 0) {
                var total_cuenta = localStorage.getItem("precio_total")
                Swal.fire({
                    icon: 'info',
                    title: `El total de su cuenta es: ${total_cuenta}`
                })
                localStorage.clear()
            } else {
                Swal.fire({
                    icon: 'error',
                    title: `Pida algo... animal`
                })
            }
            break;
        case "pepe":
            alert("sabe cositas el...")
            break
        default:
            if (menu.indexOf(pedido_usuario) != -1) {
                posicion_menu = menu.indexOf(pedido_usuario)
                let precio_pedido = precios[posicion_menu]

                if (localStorage.getItem("precio_total") == null) {
                    localStorage.setItem("precio_total", precio_pedido)
                    Swal.fire({
                        icon: 'success',
                        title: `Pedido creado`
                    })
                } else {
                    var precio_total = localStorage.getItem("precio_total")
                    precio_total = parseInt(precio_total) + parseInt(precio_pedido)
                    localStorage.setItem("precio_total", precio_total)
                    Swal.fire({
                        icon: 'success',
                        title: `Pedido actualizado`
                    })
                }
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'No existe el producto en el menu'
                })
            }
    }

})


function guardar_ls() {
    var texto = document.querySelector("#info").value
    var contador = 0
    if (localStorage.getItem("contador") == null) {
        localStorage.setItem("contador", contador)
    } else {
        contador = localStorage.getItem("contador")
    }
    contador++
    localStorage.setItem(`texto_${contador}`, texto)
    localStorage.setItem("contador", contador)
}