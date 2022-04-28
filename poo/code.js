let productosElCubioFresco = [{
        id: 1,
        nombre: "Cubios",
        categoria: "Verdura",
        precio: 2000,
        imagen: "https://www.comervipc.com/wp-content/uploads/2020/04/CUBIOS.jpg",
        distribuidor: {
            empresa: "Campesino SAS",
            direccion: "Vereda menganito 123",
            repartidores: {
                reapartidor1: {
                    nombre: "Leonidas",
                    apellido: "Chupamestetenco",
                    telefono: "3142589658"
                }
            }
        }
    },
    {
        id: 2,
        nombre: "Cerveza Poker",
        categoria: "Bebidas alcoholicas",
        precio: 2800,
        imagen: "https://mercarry.com/wp-content/uploads/2021/09/269.jpg",
        distribuidor: {
            empresa: "Bavaria",
            direccion: "Av boyaca 85-96",
            repartidores: {
                reapartidor1: {
                    nombre: "Sara",
                    apellido: "Colmenares",
                    codigo: "8569",
                    telefono: "3256589854"
                },
                reapartidor2: {
                    nombre: "Oscar",
                    apellido: "Zuluaga",
                    codigo: "8547",
                    telefono: "3254789586"
                },
            }
        }
    },
    {
        id: 3,
        nombre: "Pan de 7 granos FIT",
        categoria: "Panaderia",
        precio: 15000,
        imagen: "https://laroussecocina.mx/wp-content/uploads/2019/05/Pan-multigrano.jpg"
    },
    {
        id: 4,
        nombre: "Chocorramo",
        categoria: "Ponques",
        precio: 2000,
        imagen: "https://static.merqueo.com/images/products/large/fe20e71b-3d8c-4efb-aa5c-2826ef967fd1.jpg",
        distribuidor: {
            empresa: "Ramo",
            direccion: "Cll falsa 123"
        }
    }
]

let botonPago = document.querySelector("#botonPagar")
botonPago.addEventListener("click", () => {
    let claseCarrito = new Carrito
    alert(claseCarrito.precioCarrito())
    localStorage.clear()
})

let grillaProductos = document.querySelector("[data-productos]")
for (const dataProducto of productosElCubioFresco) {
    grillaProductos.innerHTML += `
            <div class="col">
                <div class="card">
                    <img src="${dataProducto.imagen}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${dataProducto.nombre}</h5>
                        <p class="card-text">${dataProducto.precio}</p>
                        <button class="btn btn-dark" data-producto-id="${dataProducto.id}">Agregar al carrito</button>
                    </div>
                </div>
            </div>

`
}

setTimeout(() => {
    let botonesCarrito = document.querySelectorAll("[data-producto-id]")
    botonesCarrito.forEach(boton => {
        boton.addEventListener("click", () => {
            let idProducto = boton.dataset.productoId
            let claseCarrito = new Carrito()
            claseCarrito.agregarProducto(productosElCubioFresco[idProducto - 1])
            console.log(claseCarrito.obtenerProductos())
        })
    });
}, 1200);


// let producto ={
//     nombre: "Jugo de naranja",
//     categoria: "Jugos",
//     precio: 8500,
//     distribuidor: {
//         empresa: "HIT SAS",
//         direccion: "Cll falsa 123",
//         repartidores: {
//             reapartidor1: {
//                 nombre: "Johan",
//                 apellido: "Perez",
//                 codigo: "65623289",
//                 telefono: "6802574"
//             },
//             reapartidor2: {
//                 nombre: "Oscar",
//                 apellido: "Zuluaga",
//                 codigo: "567675433423",
//                 telefono: "3148569"
//             },
//         }
//     }
// }


// console.log(producto)
// console.log(producto.nombre)
// console.log(producto.distribuidor)
// console.log(producto.distribuidor.empresa)
// console.log(producto.distribuidor.repartidores)
// console.log(producto.distribuidor.repartidores.reapartidor1)
// console.warn(Object.values(producto))





// claseCarrito.agregarProducto(producto)
// claseCarrito.agregarProducto({ nombre: "cocacola", precio: 3000 })
// console.log(claseCarrito.obtenerProductos())

// console.log(claseCarrito.precioCarrito())