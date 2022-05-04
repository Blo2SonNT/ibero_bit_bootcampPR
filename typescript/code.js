// npm i typescript -g
// npm install typescript -g
// tsc -v
console.log("hola mundo con TS");
console.log("pepe");
var texto = "este es un texto";
var numero = 33;
var vino = true || false;
var todo = "texto";
var soloArreglos = ["texto", true, 3];
var stringSoloArray = ["hola", "mi", "nombre"];
var numberSoloArray = [1, 2, 3, 4, 5];
var booleanSoloArray = [true, false, false, true];
var estructuraArray;
estructuraArray = ["texto", 2, 6, true];
var estructuraDeLosArrays;
estructuraDeLosArrays = [[5, true], [8, false], [2, false]];
// var datoNull : null = null
// var datoIndefinido : void = undefined
// var datoIndefinido2 : undefined = undefined
function suma(num1, num2) {
    return num1 + num2;
}
var resta = function (num1) {
    //proceso
    return;
};
function pruebaI(objeto) {
    return objeto.key1 + " - " + objeto.key2;
}
console.log(pruebaI({ key1: 5, key2: "hola" }));
