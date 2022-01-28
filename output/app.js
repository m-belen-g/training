"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
class Persona1 {
    //**Constructor */
    constructor(nombre, apellido, anoNac) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.anoNac = anoNac;
    }
    //**Metodos */
    toString() {
        return this.nombre + this.apellido;
    }
    edad(anoActual) {
        return (anoActual - this.anoNac);
    }
}
/*
    get Nombre():string {
        return this.nombre
    }

    set Apellido(apellido:string) {
        this.apellido=apellido
    }
}
*/
//**Inicializando objeto */
let persona = new Persona1('Maria', 'Rosas', 1994);
persona.apellido = 'Gomez';
function DecoradorPersona2(data) {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.array = data.split(",");
                this.Nombre = this.array[0];
                this.Apellido = this.array[1];
            }
        };
    };
}
let Persona2 = class Persona2 {
    //**Constructor */
    constructor(nombre, apellido, anoNac) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.anoNac = anoNac;
    }
};
Persona2 = __decorate([
    DecoradorPersona2('Juan,Perez')
], Persona2);
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
class Operacion {
    constructor() {
        this.valorA = 0;
        this.valorB = 0;
        this.resultado = 0;
    }
    set ValorA(value) {
        this.valorA = value;
    }
    set ValorB(value) {
        this.valorB = value;
    }
    get Resultado() {
        return this.resultado;
    }
}
class Suma extends Operacion {
    Sumar() {
        this.resultado = this.valorA + this.valorB;
    }
}
class Resta extends Operacion {
    Restar() {
        this.resultado = this.valorA - this.valorB;
    }
}
let operacionS = new Suma();
operacionS.ValorA = 45;
operacionS.ValorB = 10;
operacionS.Sumar();
console.log("El Resultado de la suma es " + operacionS.Resultado);
let operacionR = new Resta();
operacionR.ValorA = 45;
operacionR.ValorB = 10;
operacionR.Restar();
console.log("El Resultado de la resta es " + operacionR.Resultado);
