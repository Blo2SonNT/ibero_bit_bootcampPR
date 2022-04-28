class Carrito {

    constructor() {
        this.productos = []
    }

    agregarProducto(producto_info) {
        this.productos.push(producto_info)

        if (localStorage.getItem("Precio") == null) {
            localStorage.setItem("Precio", producto_info.precio)
        } else {
            let precioTotal = localStorage.getItem("Precio")
            precioTotal = parseInt(producto_info.precio) + parseInt(precioTotal)
            precioTotal = localStorage.setItem("Precio", precioTotal)
        }
    }

    obtenerProductos() {
        return this.productos
    }

    precioCarrito() {
        let precioTotal = 0
        if (localStorage.getItem("Precio") == null) {
            localStorage.setItem("Precio", 0)
            precioTotal = "Compre algo primero.... bestia"
        } else {
            precioTotal = localStorage.getItem("Precio")
        }
        // this.productos.forEach(dataProdcuto => {
        //     precioTotal = parseInt(dataProdcuto.precio) + parseInt(precioTotal)
        // });

        return precioTotal
    }
}