class Persona1 {
    //**Atributos*//
    readonly nombre:string;
    public apellido:string;
    private anoNac:number;

    //**Constructor */
    constructor(nombre:string, apellido:string, anoNac:number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.anoNac = anoNac
    }
    //**Metodos */

    public toString():string {
        return this.nombre + this.apellido;
    }
    public edad(anoActual:number):number {
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

let persona= new Persona1('Maria','Rosas',1994);
persona.apellido='Gomez'





