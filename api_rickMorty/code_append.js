// let api_url = "https://rickandmortyapi.com/api/character/?name=rick"
let api_url = "https://rickandmortyapi.com/api/character/1"
let body_html = document.querySelector("body")
let div_principal = document.createElement("div")
body_html.appendChild(div_principal)


let consumo = fetch(api_url)
consumo.then((res) => res.json())
    .then((data) => {
        let titulo_name = document.createElement("h1")
        titulo_name.innerText = data.name
        div_principal.appendChild(titulo_name)

        let imagen_rick = document.createElement("img")
        imagen_rick.src = data.image
        div_principal.appendChild(imagen_rick)



        console.log(data)
    }).catch((error) => {
        alert("No se puede conectar con la API")
        console.log(error)
    })