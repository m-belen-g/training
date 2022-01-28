"use strict";
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
