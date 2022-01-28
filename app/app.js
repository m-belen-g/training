"use strict";
let message = 'hello World';
console.log(message);
let nombre = "Belen";
let mensaje = "Mi nombre es " + nombre + ". Soy nueva en Typescript";
console.log(mensaje);
let codigoProducto = 6;
let estadoProducto = false;
function mensajeUsuario() {
    console.log("Este es un mensaje para el usuario");
}
//**Funcion de enumeracion, es ultil, ordenada */
var Color;
(function (Color) {
    Color[Color["Blanco"] = 0] = "Blanco";
    Color[Color["Rojo"] = 1] = "Rojo";
    Color[Color["Verde"] = 2] = "Verde";
})(Color || (Color = {}));
// **Declaro la variable y le asigno valor de enumeracion */
let colorAuto = Color.Blanco;
console.log(colorAuto);
