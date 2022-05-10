// npm i typescript -g
// npm install typescript -g
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
//CLASES
var Comidas = /** @class */ (function () {
    function Comidas(ingrediente, edad) {
        this.ingrediente = ingrediente;
        this.edad = edad;
    }
    Comidas.prototype.obtenerIngrediente = function () {
        return "El ingrediente ingresado es " + this.ingrediente;
    };
    Comidas.prototype.obtenerEdad = function () {
        return "La edad del cocinero es " + this.edad;
    };
    Comidas.prototype.comidaDisponible = function (disponible, nombre) {
        var activo = (disponible) ? "Esta disponible" : "no esta disponible";
        return "El platillo " + nombre + " " + activo;
    };
    return Comidas;
}());
var restaurante = new Comidas("Pollito", 95);
console.log(restaurante.obtenerIngrediente());
console.log(restaurante.ingrediente);
console.log(restaurante.comidaDisponible(true, "Poop corns"));
var Proveedor = /** @class */ (function (_super) {
    __extends(Proveedor, _super);
    function Proveedor(ingrediente, edad, direccion, inventario) {
        return _super.call(this, ingrediente, edad) || this;
    }
    Proveedor.prototype.comidaDisponible = function () {
        //logica
        return _super.prototype.comidaDisponible.call(this, this.disponible, this.nombreProducto);
    };
    return Proveedor;
}(Comidas));
var proveedoresRestaurante = new Proveedor('pasta', 0, 'cll falsa 123 siempre viva', ["tallarines", "lisa", "rabiolis"]);
console.log(proveedoresRestaurante.comidaDisponible());
