// let lista_hora = document.querySelector("#hora")
// for (let h = 0; h <= 23; h++) {
//     lista_hora.innerHTML += `<option value="${h}">${h}</option>`
// }

// let lista_minuto = document.querySelector("#minuto")
// for (let m = 0; m <= 59; m++) {
//     lista_minuto.innerHTML += `<option value="${m}">${m}</option>`
// }


function listas(select_html, max_numero) {
    let lista_documento = document.querySelector("#" + select_html)
    for (let valor = 0; valor <= max_numero; valor++) {
        lista_documento.innerHTML += `<option value="${valor}">${valor}</option>`
    }
}

listas("hora", "23")
listas("minuto", "59")