function carga(info = 0) {

    let info_vehiculos = [{
            nombre: "modeloY",
            color: "azul",
            caballos: 1500,
            url: "https://tesla-cdn.thron.com/delivery/public/image/tesla/0cf18940-c0bf-45f7-b2d8-46c3bc693c65/bvlatuR/std/0x0/model-y_R1@2"
        },
        {
            nombre: "modeloX",
            color: "rojo",
            caballos: 2000,
            url: "https://tesla-cdn.thron.com/delivery/public/image/tesla/5102fa27-0d41-4f79-b07b-7ffb1ceb55ff/bvlatuR/std/2880x1800/Model-X-Main-Hero-Desktop-LHD"
        },
        {
            nombre: "modeloZ",
            color: "gris",
            caballos: 1200,
            url: "https://tesla-cdn.thron.com/delivery/public/image/tesla/35861782-9705-4f73-84f0-86d615adb661/bvlatuR/std/4096x2560/Model-S-Main-Hero-Desktop-LHD"
        },
    ]

    // info_vehiculos = {
    //     modeloY: {
    //         nombre: "modeloY",
    //         color: "azul",
    //         caballos: 1500,
    //         url: "https://tesla-cdn.thron.com/delivery/public/image/tesla/0cf18940-c0bf-45f7-b2d8-46c3bc693c65/bvlatuR/std/0x0/model-y_R1@2"
    //     },
    //     modeloZ: {
    //         nombre: "modeloY",
    //         color: "azul",
    //         caballos: 1500,
    //         url: "https://tesla-cdn.thron.com/delivery/public/image/tesla/0cf18940-c0bf-45f7-b2d8-46c3bc693c65/bvlatuR/std/0x0/model-y_R1@2"
    //     },
    //     modeloH: {
    //         nombre: "modeloY",
    //         color: "azul",
    //         caballos: 1500,
    //         url: "https://tesla-cdn.thron.com/delivery/public/image/tesla/0cf18940-c0bf-45f7-b2d8-46c3bc693c65/bvlatuR/std/0x0/model-y_R1@2"
    //     },
    // }
    let modelo_web = new Carro(
        info_vehiculos[info].nombre,
        info_vehiculos[info].url,
        info_vehiculos[info].color,
        info_vehiculos[info].caballos
    )
    document.querySelector("#info_vehiculo").innerHTML = modelo_web.crear_pagina()
}

carga()