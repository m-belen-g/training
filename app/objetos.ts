//**Arreglos */
let list : string[]=['pimiento', 'papas', 'tomate'];
let rocosos: boolean[] = [true, false, false, true];
let perdidos: any[] = [9, true, 'asteroides'];
let diametro: [string, number] = ['Saturno', 99];

//**Genericos , el objeto es la T*/

function identity<T>(arg: T): T {
    return arg;
};

/*Objetos 
let persona:object ={nombre:"Ana", edad:45} */

//**Desestructuracion */
//**De un Objeto*/
var obj={a:1,b:2,c:3};
console.log(obj.c)

//**Desestructuracion */
//**De un Array*/
var array=[1,2,3];
console.log(array[0])

//**Desestructuracion con Estructuracion */
var array=[1,2,3,5];
var [x,y, ...rest]=array;
console.log(rest);

//**Asercion de tipos As */
(nombre as string).toUpperCase();
(<string>nombre).toUpperCase;

//** Funciones */
class Producto {
 precio:number = 1; 
} 

function calcularIva (productos:Producto[]):[number, number] {
    let total=0;
    productos.forEach(({precio})=> {
        total+= precio;
    });
    return [total, total*0.15];
}




