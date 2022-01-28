let message: string = 'hello World';
console.log(message);

let nombre: string = "Belen";

let mensaje: string = "Mi nombre es " + nombre + ". Soy nueva en Typescript"
console.log(mensaje);

let codigoProducto: number = 6;
let estadoProducto: boolean = false;
function mensajeUsuario(): void {
    console.log("Este es un mensaje para el usuario");
}

//**Funcion de enumeracion, es ultil, ordenada */
enum Color {
    Blanco,
    Rojo,
    Verde
}

// **Declaro la variable y le asigno valor de enumeracion */

let colorAuto: Color= Color.Blanco;

console.log(colorAuto); 