// npm i typescript -g
// npm install typescript -g

// tsc -v


console.log("hola mundo con TS")
console.log("pepe")

var texto: string = "este es un texto"
let numero: number = 33

var vino: boolean = true || false

var todo: any = "texto"


var soloArreglos: any[] = ["texto", true, 3]
var stringSoloArray : string[] = ["hola", "mi", "nombre"]
var numberSoloArray: number[] = [1,2,3,4,5]
var booleanSoloArray: boolean[] = [true, false, false, true]

var estructuraArray: [string, number, number, boolean]
estructuraArray = ["texto", 2, 6, true]

var estructuraDeLosArrays: [number, boolean][]
estructuraDeLosArrays = [[5, true], [8, false], [2, false]]

// var datoNull : null = null
// var datoIndefinido : void = undefined
// var datoIndefinido2 : undefined = undefined

function suma(num1: number, num2: number): number{
    return num1+num2
}

let resta = function(num1: number | string): number{
    //proceso
    return 
}

interface Idato{
    key1: number,
    key2: string
}

function pruebaI(objeto: Idato):any{
    return `${objeto.key1} - ${objeto.key2}`
}

console.log(pruebaI({key1:5, key2:"hola"}))