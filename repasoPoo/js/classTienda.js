class Tienda {
    nombreTienda = ''
    constructor() {}

    planBaseDatos() {
        let misProductos = [{
                nombre: "Achiras El Paisa chimbo",
                precio: 3000,
                img: "url",
                inventario: 99
            },
            {
                nombre: "Uvas Pasas",
                precio: 1500,
                img: "url",
                inventario: 4
            },
            {
                nombre: "Vive 1000 - refrescate",
                precio: 2000,
                img: "url",
                inventario: 10
            }
        ]
        localStorage.setItem("BDTienda", JSON.stringify(misProductos))
    }

    vistaProducto(tipoVista = 'card', img, nombre, precio, idProducto) {
        let vista = ''
        switch (tipoVista) {
            case "card":
                vista = `
                <div class="col">
                        <div class="card">
                            <img src="${img}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${nombre}</h5>
                                <p class="card-text">$ ${precio}</p>
                                <button class="btn btn-dark" data-compra="${idProducto}">Agregar al carrito</button>
                            </div>
                        </div>
                    </div>`
                break
            case "slider":
                vista = `
                <div class="carousel-item">
                    <img src="..." class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                        </div>
                </div>
                `
                break
            default:
                vista = "Error, vista no especificada"
                break
        }

        return vista

    }


    mostrarProductos(vista) {
        let vistaProductos = ''
        let BD = this.solicitarBaseDatos()
        console.log(BD)
        BD.forEach((producto, indiceProducto) => {
            vistaProductos += this.vistaProducto(vista, producto.img, producto.nombre, producto.precio, indiceProducto)

        });
        return vistaProductos
    }

    solicitarBaseDatos() {
        if (localStorage.getItem("BDTienda") == null) {
            this.planBaseDatos()
        }
        let BD_data = localStorage.getItem("BDTienda")
        BD_data = JSON.parse(BD_data)
        return BD_data
    }

    agregarProductoCarrito(idProducto) {
        let BD_data = localStorage.getItem("BDTienda")
        BD_data = JSON.parse(BD_data)
        let carrito = ''
        if (localStorage.getItem("carrito") == null) {
            carrito = []
        } else {
            carrito = JSON.parse(localStorage.getItem("carrito"))
        }
        carrito.push(BD_data[idProducto])
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }


}

let tiendaClass = new Tienda()
if (localStorage.getItem("BDTienda") == null) {
    tiendaClass.planBaseDatos()
}

document.querySelector("#productosTienda").innerHTML = tiendaClass.mostrarProductos("card")

setTimeout(() => {
    let botonesCarrito = document.querySelectorAll("[data-compra]")
    botonesCarrito.forEach(boton => {
        let idProducto = boton.dataset.compra
        boton.addEventListener("click", () => {
            tiendaClass.agregarProductoCarrito(idProducto)
        })
    });
}, 1000);