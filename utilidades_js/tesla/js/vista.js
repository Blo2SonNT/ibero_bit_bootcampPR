function carga(info = '') {
    info_vehiculos = {
        modeloY: {
            nombre: "modeloY",
            color: "azul",
            caballos: 1500,
            url: "https://tesla-cdn.thron.com/delivery/public/image/tesla/0cf18940-c0bf-45f7-b2d8-46c3bc693c65/bvlatuR/std/0x0/model-y_R1@2"
        },
        modeloZ: {
            nombre: "modeloY",
            color: "azul",
            caballos: 1500,
            url: "https://tesla-cdn.thron.com/delivery/public/image/tesla/0cf18940-c0bf-45f7-b2d8-46c3bc693c65/bvlatuR/std/0x0/model-y_R1@2"
        },
        modeloH: {
            nombre: "modeloY",
            color: "azul",
            caballos: 1500,
            url: "https://tesla-cdn.thron.com/delivery/public/image/tesla/0cf18940-c0bf-45f7-b2d8-46c3bc693c65/bvlatuR/std/0x0/model-y_R1@2"
        },
    }
    let modelo_web = new Carro(
        info_vehiculos.modeloY.nombre,
        info_vehiculos.modeloY.url,
        info_vehiculos.modeloY.color,
        info_vehiculos.modeloY.caballos
    )
    document.querySelector("#info_vehiculo").innerHTML = modelo_web.crear_pagina()
}