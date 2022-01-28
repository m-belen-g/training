var ISuma = /** @class */ (function () {
    function ISuma() {
    }
    ISuma.prototype.Operar = function (a, b) {
        return a + b;
    };
    return ISuma;
}());
var IResta = /** @class */ (function () {
    function IResta() {
    }
    IResta.prototype.Operar = function (a, b) {
        return a - b;
    };
    return IResta;
}());
var test = /** @class */ (function () {
    function test(b, c) {
        this.b = b;
        this.c = c;
    }
    return test;
}());
//**Instanciando objeto en funcion de la interfaz anterior */
var personita = {
    nombre: 'Belen',
    edad: 26,
    direccion: {
        calle: 'Ramos Mejia',
        pais: 'Argentina',
        ciudad: 'Cinco Saltos'
    },
    mostrarDireccion: function () {
        return this.direccion.calle + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais + '.';
    }
};
console.log(personita.mostrarDireccion());
