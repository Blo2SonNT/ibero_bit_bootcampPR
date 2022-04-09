const body = document.querySelector("body")
let navbar = document.createElement("nav")
navbar.className = 'navbar navbar-expand-lg navbar-dark bg-dark'
body.appendChild(navbar)

let div_navbar = document.createElement("div")
div_navbar.className = 'container-fluid'
navbar.appendChild(div_navbar)

let a_div_navbar = document.createElement("a")
a_div_navbar.className = 'navbar-brand'
a_div_navbar.href = 'https://google.com'
div_navbar.appendChild(a_div_navbar)

let img_a_div_navbar = document.createElement("img")
img_a_div_navbar.src = "img/logo'prime.svg"
img_a_div_navbar.className = 'img-logo ms-5'
a_div_navbar.appendChild(img_a_div_navbar)

let button_div_navbar = document.createElement("button")
button_div_navbar.className = 'navbar-toggler'
button_div_navbar.type = 'button'
button_div_navbar.setAttribute("data-bs-toggle", "collapse")
button_div_navbar.setAttribute("data-bs-target", "#navbarSupportedContent")
button_div_navbar.setAttribute("aria-controls", "navbarSupportedContent")
button_div_navbar.setAttribute("aria-expanded", "false")
button_div_navbar.setAttribute("aria-label", "Toggle navigation")
div_navbar.appendChild(button_div_navbar)

let span_butoon_div_navbar = document.createElement("span")
span_butoon_div_navbar.className = 'navbar-toggler-icon'
button_div_navbar.appendChild(span_butoon_div_navbar)

let div_1_div_navbar = document.createElement("div")
div_1_div_navbar.className = 'collapse navbar-collapse';
// div_1_div_navbar.setAttribute("id", "navbarSupportedContent")
div_1_div_navbar.id = "navbarSupportedContent"
div_navbar.appendChild(div_1_div_navbar)

let ul_div_1 = document.createElement("ul")
ul_div_1.className = 'navbar-nav me-auto mb-2 mb-lg-0'
div_1_div_navbar.appendChild(ul_div_1)

let elementos_ul_div_1 = [
    "inicio",
    "series",
    "peliculas",
    "categorias"
]

elementos_ul_div_1.forEach((opcion, indice) => {
    var elemento_ul_div_1 = document.createElement("li")
    elemento_ul_div_1.className = 'nav-item';
    // elemento_ul_div_1.innerText = opcion
    var a_elemento_ul_div_1 = document.createElement("a")
        /*
            if (indice == 0) {
                a_elemento_ul_div_1.className = 'nav-link  active'
            } else {
                a_elemento_ul_div_1.className = 'nav-link'
            }

            // Traduccion a ternaria en la siguiente linea :)

        */
    a_elemento_ul_div_1.className = (indice == 0) ? 'nav-link  active' : 'nav-link'
    a_elemento_ul_div_1.innerText = opcion
    ul_div_1.appendChild(elemento_ul_div_1)
    elemento_ul_div_1.appendChild(a_elemento_ul_div_1)
});