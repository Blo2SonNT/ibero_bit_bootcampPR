// var tituloHtml = document.getElementById('titulo-pagina')
// var tituloHtml = document.querySelector('#titulo-pagina')
// tituloHtml.classList.add('text-center', 'text-danger')
// tituloHtml.classList.remove('bg-success')

// let contenidoDiv = document.querySelector('.contenido')
//     // console.log(contenidoDiv)
// let imagenes = [
//     'https://fondosmil.com/fondo/52714.jpg',
//     'https://p4.wallpaperbetter.com/wallpaper/277/945/270/code-programming-wallpaper-preview.jpg',
//     'img/programacion.webp'
// ]
// contenidoDiv.innerHTML = `
// <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
//   <div class="carousel-inner">
//     <div class="carousel-item">
//       <img src="${imagenes[0]}" class="d-block w-100" alt="...">
//     </div>
//     <div class="carousel-item">
//       <img src="${imagenes[1]}" class="d-block w-100" alt="...">
//     </div>
//     <div class="carousel-item">
//       <img src="${imagenes[2]}" class="d-block w-100" alt="...">
//     </div>
//   </div>
//   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Previous</span>
//   </button>
//   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Next</span>
//   </button>
// </div>

// `






// // function agregar_imagen() {

// //     let imagen_usuario = prompt("Ingrese la url de la imagen")
// //     let div1 = document.querySelector('.carousel-inner')
// //     div1.innerHTML += `
// //                 <div class="carousel-item">
// //                     <img src="${imagen_usuario}" class="d-block w-100" alt="...">
// //                 </div>
// //     `
// //         // console.log(div1)
// // }
// // let mi_variable = 1
// // while (mi_variable <= 100) {
// //     console.log(mi_variable)
// //     mi_variable++
// // }

// // for (let mi_variable = 0; mi_variable <= 100; mi_variable++) {
// //     console.log(mi_variable)
// // }



// function mostrar_imagenes() {
//     let slider_imagenes = ''
//     let div1 = document.querySelector('.carousel-inner')
//     for (let data_imagenes = 0; data_imagenes < 3; data_imagenes++) {
//         var activo = (data_imagenes == 1) ? 'active' : ''
//         slider_imagenes += `
//             <div class="carousel-item ${activo}">
//                 <img src="${imagenes[data_imagenes]}" class="d-block w-100" alt="...">
//             </div>
//         `
//     }
//     div1.innerHTML += slider_imagenes
// }

// mostrar_imagenes()





var nombre = 'Juan'


if (nombre == 'Juan') {
    console.log('Es juan')
} else if (nombre == 'miguel') {
    console.warn("ojo... es miguel")
} else {
    console.error("No es igual a juan")
}