let menu = [
    "pasta",
    "hamburguesas",
    "pizza",
    "pola",
    "cubios",
    "carne y azucar",
    "vinito barato de luzu"
]

let menu_html = document.querySelector("#menu-opciones")

for (let x = 0; x < menu.length; x++) {

    (x == 0) ? menu_html.innerHTML += `<option>Seleccione uno...</option>`: ""
    var selected = (x == 2) ? "selected" : ""
    menu_html.innerHTML += `
        <option  value="${x}" ${selected}>${menu[x]}</option>
    `
}

/*********************************************/

let nombres = [
    "sara",
    "freddy",
    "juan",
    "hugo"
]

let lista_html = document.querySelector("#lista")

nombres.forEach((elemento_gatito, posicion, mi_array) => {
    lista_html.innerHTML += `<li class="list-group-item">${posicion} - ${elemento_gatito}</li> ${mi_array}`
});