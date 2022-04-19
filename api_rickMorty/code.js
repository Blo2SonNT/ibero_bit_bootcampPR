let api_url = "https://rickandmortyapi.com/api/character/?name=rick"
    // let api_url = "https://rickandmortyapi.com/api/character/1"
let div_vista = document.querySelector("#vista")

let consumo = fetch(api_url)
consumo.then((res) => res.json())
    .then((data) => {
        console.log(data)

        for (const personaje of data.results) {
            div_vista.innerHTML += `
            <h1>${personaje.name}</h1>
            <img src="${personaje.image}" alt="">
            <br>
        `
            let episodios = personaje.episode
            episodios.forEach(episodio_rick => {
                div_vista.innerHTML += episodio_rick + "<br>"
            });
        }


        // console.log(personaje)
    })

// .catch((error) => {
//     alert("No se puede conectar con la API")
//     console.log(error)
// })