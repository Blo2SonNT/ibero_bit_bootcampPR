// console.log("Hola Mundo")
// console.log("Mi primera vez con NODE")


// let os = require('os')
// console.log(os.platform())
// console.log(os.release())
// console.log(os.totalmem())
// console.log(os.networkInterfaces())


let fs = require('fs')
fs.writeFile('./miArchivo.txt', 'Hola querido como estas?', (error) => {
    if (error) {
        console.log(error)
    } else {
        console.log("El archivo fue creado")
    }
})

// fs.readFile('./miArchivo.txt', (error, data) => {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log(data.toString())
//     }
// })