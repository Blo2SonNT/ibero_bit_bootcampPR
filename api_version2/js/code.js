//keypress
let input_busqueda = document.querySelector("#buscador_personaje")
input_busqueda.addEventListener("keypress", buscador)

let url_api = "https://rickandmortyapi.com/api/character";
let api = fetch(url_api);


api.then(res => res.json())
    .then(data => {
        let div_contenido = document.querySelector("#contenido")
        let data_results = data.results
        console.log(data_results)
        data_results.forEach(personaje => {
            div_contenido.innerHTML += `
            <div class="col">
                <div class="card">
                <img src="${personaje.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${personaje.name}</h5>
                    <ul class="list-group">
                        <li class="list-group-item">${traducir_palabra(personaje.status, "estado")}</li>
                        <li class="list-group-item">${traducir_palabra(personaje.gender, "genero")}</li>
                        <li class="list-group-item">${personaje.species}</li>
                    </ul>
                    <button type="button" class="btn btn-dark" onclick="modal_data_personaje('${personaje.episode}')">
                        Episodios Modal JS
                    </button>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" onclick="completa_modal_normal('${personaje.episode}')" data-bs-target="#modalNormalEpisodios">
                        Episodios Modal Normal
                    </button>
                </div>
                </div>
            </div>
            `
        });
    })


function traducir_palabra(palabra, tipo) {
    if (tipo == "estado") {
        switch (palabra) {
            case "Dead":
                palabra = "El men esta morido ☠"
                break;
            case "Alive":
                palabra = "El men esta vivito 👀"
                break
            default:
                palabra = "Io ke ze"
                break;
        }
    } else if (tipo == "genero") {
        switch (palabra) {
            case "Male":
                palabra = "Macho machote"
                break;
            case "Female":
                palabra = "Severa flor"
            default:
                palabra = "No zoi 100tifiko"
                break;
        }
    }
    return palabra
}

function modal_data_personaje(array_episodios) {
    array_episodios = array_episodios.split(',')
    let contenido_tabla = '<ul class="list-group">'
    array_episodios.forEach(episodio => {
        contenido_tabla += `
            <li class="list-group-item">${episodio}</li>
        `
    });
    contenido_tabla += "</ul>"
    document.querySelector("#modalInfo").innerHTML = `
    <div class="modal fade" id="modalEpisodios" tabindex="-1" aria-labelledby="modalEpisodiosLabel" aria-hidden="true">
        <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="modalEpisodiosLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                <div class="modal-body">
                    ${contenido_tabla}
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
    
    
    `
    var myModal = new bootstrap.Modal(document.getElementById('modalEpisodios'))
    myModal.show()
}

function completa_modal_normal(array_episodios) {
    array_episodios = array_episodios.split(',')
    let contenido_tabla = '<ul class="list-group">'
    array_episodios.forEach(episodio => {
        contenido_tabla += `
            <li class="list-group-item">${episodio}</li>
        `
    });
    contenido_tabla += "</ul>"
    document.querySelector("#modalDataNormal").innerHTML = contenido_tabla
}


function buscador(evento_tecla) {
    console.log(evento_tecla.keyCode)
    if (evento_tecla.keyCode == 13) {
        let buscador = document.querySelector("#buscador_personaje").value
        let solo_numeros = /^[0-9]+$/
        let url_api = ''
        let busca_x_id = false;
        if (solo_numeros.test(buscador)) {
            url_api = "https://rickandmortyapi.com/api/character/" + buscador;
            busca_x_id = true
        } else {
            url_api = "https://rickandmortyapi.com/api/character/?name=" + buscador;
        }
        console.log(url_api)
        let api = fetch(url_api);


        api.then(res => res.json())
            .then(data => {
                let div_contenido = document.querySelector("#contenido")
                div_contenido.innerHTML = ''
                let data_results = (busca_x_id) ? data : data.results
                console.log(data_results)
                if (busca_x_id == false) {
                    data_results.forEach(personaje => {
                        div_contenido.innerHTML += `
                <div class="col">
                    <div class="card">
                    <img src="${personaje.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${personaje.name}</h5>
                        <ul class="list-group">
                            <li class="list-group-item">${traducir_palabra(personaje.status, "estado")}</li>
                            <li class="list-group-item">${traducir_palabra(personaje.gender, "genero")}</li>
                            <li class="list-group-item">${personaje.species}</li>
                        </ul>
                        <button type="button" class="btn btn-dark" onclick="modal_data_personaje('${personaje.episode}')">
                            Episodios Modal JS
                        </button>
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" onclick="completa_modal_normal('${personaje.episode}')" data-bs-target="#modalNormalEpisodios">
                            Episodios Modal Normal
                        </button>
                    </div>
                    </div>
                </div>
                `
                    });
                } else {
                    div_contenido.innerHTML += `
                <div class="col">
                    <div class="card">
                    <img src="${data.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${data.name}</h5>
                        <ul class="list-group">
                            <li class="list-group-item">${traducir_palabra(data.status, "estado")}</li>
                            <li class="list-group-item">${traducir_palabra(data.gender, "genero")}</li>
                            <li class="list-group-item">${data.species}</li>
                        </ul>
                        <button type="button" class="btn btn-dark" onclick="modal_data_personaje('${data.episode}')">
                            Episodios Modal JS
                        </button>
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" onclick="completa_modal_normal('${data.episode}')" data-bs-target="#modalNormalEpisodios">
                            Episodios Modal Normal
                        </button>
                    </div>
                    </div>
                </div>
                `
                }
            })
    }
}





// https://rickandmortyapi.com/api/character/?name=rick&status=alive

// https://rickandmortyapi.com/api/character/2