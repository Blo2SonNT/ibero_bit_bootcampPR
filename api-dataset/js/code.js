// class Api_rick {
//     api_url = "https://rickandmortyapi.com/api";
//     endpointApi = '';

//     constructor(endpoint) {
//         this.endpointApi = endpoint;
//     }

//     consumir() {
//         let consumo_api = fetch(`${this.api_url}/${this.endpointApi}`);
//         let vista_html = ''
//         consumo_api.then(respuesta_api => respuesta_api.json())
//             .then(data_api => {
//                 let data = data_api.results
//                 data.forEach(personaje => {
//                     vista_html += `
//                     <div class="col">
//                         <div class="card">
//                             <img src="${personaje.image}" class="card-img-top" alt="...">
//                             <div class="card-body">
//                                 <h5 class="card-title">${personaje.name}</h5>
//                             </div>
//                         </div>
//                     </div>
//                     `
//                         // console.log(vista_html)
//                 });
//                 return vista_html
//             })
//     }
// }


// let llamadoApi = new Api_rick('character')
// var pp = llamadoApi.consumir()
// setTimeout(() => {
//     document.querySelector("#vista").innerHTML = pp
// }, 5000);





function consumo(endpointApi) {
    api_url = "https://rickandmortyapi.com/api";
    let consumo_api = fetch(`${api_url}/${endpointApi}`);
    console.log(`${api_url}/${endpointApi}`)
    let vista_html = ''
    consumo_api.then(respuesta_api => respuesta_api.json())
        .then(data_api => {
            let data = data_api.results
            console.log(data_api)
            data.forEach(personaje => {
                vista_html += `
                        <div class="col">
                            <div class="card">
                                <img src="${personaje.image}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${personaje.name}</h5>
                                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalPersonaje">
                                    Info personaje
                                    </button>
                                    </div>
                            </div>
                        </div>
                        `
            });

            let html_vista = document.querySelector("#vista")
            html_vista.innerHTML = vista_html

            let html_paginacion = document.querySelector("[data-paginacion]")
            console.log(html_paginacion)
            let color_btn = html_paginacion.dataset.paginacion
            console.log(color_btn)
            let disabled_clase_prev = (data_api.info.prev == null) ? "disabled" : ""
            let disabled_clase_next = (data_api.info.next == null) ? "disabled" : ""
            let paginacion_numero = ''
            for (let pagina = 1; pagina <= data_api.info.pages; pagina++) {
                paginacion_numero += `<button class="btn btn-info" data-url-api-rick="${api_url}/${endpointApi}?page=${pagina}">${pagina}</button>`
            }


            //https://rickandmortyapi.com/api/character?page=26

            let paginacion_final = "https://rickandmortyapi.com/api/character?page=26".slice("https://rickandmortyapi.com/api/")
                // let paginacion_final = "https://rickandmortyapi.com/api/character?page=26".slice(32)

            console.log(paginacion_final.length)

            html_paginacion.innerHTML += `
                <div class="d-flex justify-content-between align-items-center">
                    <button class="btn btn-${color_btn} ${disabled_clase_prev}" data-url="${data_api.info.prev}">Anterior</button>
                    <div>
                        ${paginacion_numero}
                    </div>
                    <button class="btn btn-${color_btn} ${disabled_clase_next}" data-url="${data_api.info.next}">Siguiente</button>
                </div>
            `
        })
}


function listener_paginacion() {
    let botones_numerados = document.querySelectorAll("[data-url-api-rick]")
    console.log(botones_numerados)
    botones_numerados.forEach(botoncito => {
        let url_api = ''
        url_api = botoncito.dataset.urlApiRick
        url_api = url_api.slice(32)
        console.log(url_api)
        botoncito.addEventListener("click", () => {
            consumo(url_api)
        })
    });
}

consumo('character')
setTimeout(() => {
    listener_paginacion()
}, 3000);



// class VistasModales {
//     nombre = ''
//     dimension = ''
//     estado = ''
//     imagen = ''
//     especie = ''
//     planeta = ''


//     constructor(nombre, dimension, estado, imagen, especie, planeta) {
//         this.nombre = nombre
//         this.dimension = dimension
//         this.estado = estado
//         this.imagen = imagen
//         this.especie = especie
//         this.planeta = planeta
//     }


// }
