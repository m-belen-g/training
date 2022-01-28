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
