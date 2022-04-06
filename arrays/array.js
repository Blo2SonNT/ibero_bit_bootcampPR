var nombres = ["Yofrey", "Zulma", "Freddy", "Juan"]
let salon = [true, "salon 415"]
console.log(nombres)

function eliminar_ultimo() {
    nombres.pop()

    console.log(nombres)
}

function eliminar_primero() {
    nombres.shift()

    console.log(nombres)
}

function agregar_ultimo() {
    nombres.push("juanito")

    console.log(nombres)
}

function agreegar_splice() {
    nombres.splice(2, 1, 'texto');
    console.log(nombres)
}


function unir_arreglos() {
    let union = nombres.concat(salon)
    console.log(union)
}


function orden() {
    console.log(nombres.sort())
}


function buscar() {
    console.log(nombres.indexOf("Zulma"))
}

function buscar_agregar() {
    let texto_busqueda = document.querySelector("#busqueda").value
    let nuevo_elemento = document.querySelector("#nuevo_texto").value

    let pos = nombres.indexOf(texto_busqueda)

    nombres.splice(pos, 0, nuevo_elemento)

    console.log(nombres)

}