function DecoradorPersona2(data:string) {
    return function <T extends { new(...args: any[]):{} }>(constructor:T){
        return class extends constructor {

            array = data.split(",");
            Nombre=this.array[0];
            Apellido=this.array[1];
        }
    }
}

@DecoradorPersona2('Juan,Perez')
class Persona2 {
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
}