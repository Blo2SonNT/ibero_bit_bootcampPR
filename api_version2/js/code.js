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


function buscador() {
    let buscador = document.querySelector("#buscador_personaje").value
    let url_api = "https://rickandmortyapi.com/api/character/?name=" + buscador;
    let api = fetch(url_api);


    api.then(res => res.json())
        .then(data => {
            let div_contenido = document.querySelector("#contenido")
            div_contenido.innerHTML = ''
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
}