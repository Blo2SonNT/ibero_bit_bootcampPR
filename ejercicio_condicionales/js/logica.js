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

function condicionales() {
    var dia_semana = document.querySelector("#dia_semana").value
    var hora_venta = document.querySelector("#hora").value
    var documento = document.querySelector("#nro_cedula").value
    var edad_venta = document.querySelector("#edad").value
    console.log(dia_semana + " " + hora_venta + " " + documento + " " + edad_venta)

    var descuento = 12

    if (dia_semana == "lunes" || dia_semana == "martes" || dia_semana == "miercoles" || dia_semana == "jueves" || dia_semana == "viernes") {
        if (hora_venta >= 7 && hora_venta <= 20) {

            if (edad_venta >= 18 && edad_venta <= 60) {
                if (dia_semana == "lunes") {
                    if (documento == 1 || documento == 2) {
                        alert(`Tiene derecho a un descuento del ${descuento}%`)
                    }
                } else if (dia_semana == "martes") {

                } else if (dia_semana == "miercoles") {

                } else if (dia_semana == "jueves") {

                } else if (dia_semana == "viernes") {

                }
            } else if (edad_venta >= 61) {

            }

        }

    }
}