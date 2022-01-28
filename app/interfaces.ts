interface IOperacion {
    Operar(a:number, b:number):number;
}

class ISuma implements IOperacion {
    Operar(a:number, b:number):number {
        return a+b;
    }
}

class IResta implements IOperacion {
    Operar(a:number, b:number):number {
        return a-b;
    }
}

//** Las interfaces nos permiten crear nuevos tipos y comprobar los tipos de variables */
interface a {
    b:number;
}

interface b extends a {
    c:string;
}

class test implements b {
    b: number;
    c: string;
    constructor (b:number, c:string) {
        this.b = b;
        this.c = c;
    }
}

/*Interfaz persona -- Interfaces anidadas, pueden ser dificiles de interpretar

interface Ipersona {
    nombre: string;
    edad: number;
    direccion: {
        calle:string;
        pais: string;
        ciudad: string;
    },
    mostrarDireccion:() =>string;
}

--Instanciando objeto en funcion de la interfaz anterior --

const personita:Ipersona ={
    nombre: 'Belen',
    edad:26,
    direccion:{
        calle:'Ramos Mejia 112',
        pais:'Argentina',
        ciudad:'Cinco Saltos'
    },
    mostrarDireccion() {
        return this.direccion.calle + ', ' + this.direccion.ciudad+ ', ' + this.direccion.pais + '.';
    }
}

console.log(personita.mostrarDireccion());

Interfaces no anidadas, mas faciles de comprender
*/

interface Ipersona {
    nombre: string;
    edad: number;
    direccion: IDireccion,
    mostrarDireccion:() =>string;
}

interface IDireccion {
    calle:string;
    pais: string;
    ciudad: string;
}

const personita:Ipersona ={
    nombre: 'Belen',
    edad:26,
    direccion:{
        calle:'Ramos Mejia 112',
        pais:'Argentina',
        ciudad:'Cinco Saltos'
    },
    mostrarDireccion() {
        return this.direccion.calle + ', ' + this.direccion.ciudad+ ', ' + this.direccion.pais + '.';
    }
};

console.log(personita.mostrarDireccion());
