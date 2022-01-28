"use strict";
//**Arreglos */
let list = ['pimiento', 'papas', 'tomate'];
let rocosos = [true, false, false, true];
let perdidos = [9, true, 'asteroides'];
let diametro = ['Saturno', 99];
//**Genericos , el objeto es la T*/
function identity(arg) {
    return arg;
}
;
/*Objetos
let persona:object ={nombre:"Ana", edad:45} */
//**Desestructuracion */
//**De un Objeto*/
var obj = { a: 1, b: 2, c: 3 };
console.log(obj.c);
//**Desestructuracion */
//**De un Array*/
var array = [1, 2, 3];
console.log(array[0]);
//**Desestructuracion con Estructuracion */
var array = [1, 2, 3, 5];
var [x, y, ...rest] = array;
console.log(rest);
//**Asercion de tipos As */
nombre.toUpperCase();
nombre.toUpperCase;
//** Funciones */
class Producto {
    constructor() {
        this.precio = 1;
    }
}
function calcularIva(productos) {
    let total = 0;
    productos.forEach(({ precio }) => {
        total += precio;
    });
    return [total, total * 0.15];
}
