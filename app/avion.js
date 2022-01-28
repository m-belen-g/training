var Turbina = /** @class */ (function () {
    function Turbina(n) {
        this.numTurbinas = 0;
        this.numTurbinas = n;
    }
    Turbina.prototype.ToString = function () {
        return this.numTurbinas + 'Turbina/s';
    };
    return Turbina;
}());
var Helice = /** @class */ (function () {
    function Helice(numheli) {
        this.numHelices = 0;
        this.numHelices = numheli;
    }
    Helice.prototype.ToString = function () {
        return this.numHelices + ' Helice/s, ';
    };
    return Helice;
}());
var TrenDeAterrizaje = /** @class */ (function () {
    function TrenDeAterrizaje(nNeum, nAmort) {
        this.numNeumaticos = 0;
        this.numAmortiguadores = 0;
        this.numNeumaticos = nNeum;
        this.numAmortiguadores = nAmort;
    }
    TrenDeAterrizaje.prototype.ToString = function () {
        return 'Tren de aterrizaje fijo que tiene ' + this.numNeumaticos + ' Neumaticos y ' + this.numAmortiguadores + ' Amortiguadores, ';
    };
    return TrenDeAterrizaje;
}());
var Alas = /** @class */ (function () {
    function Alas(frontales, cola) {
        this.numAlasFrontales = 0;
        this.numAlasCola = 0;
        this.numAlasFrontales = frontales;
        this.numAlasCola = cola;
    }
    Alas.prototype.ToString = function () {
        return this.numAlasFrontales + " Alas Frontales, " + this.numAlasCola + " Alas de Cola, ";
    };
    return Alas;
}());
var Cubierta = /** @class */ (function () {
    function Cubierta(pCabinaTripulacion, pCabinaVuelo, pSistemaEmergencia, pTanquesCombustible, pPuertasSalida) {
        this.cabinaTripulacion = false;
        this.cabinaVuelo = false;
        this.sistemaEmergencia = false;
        this.numTanquesCombustible = 0;
        this.numPuertasSalidas = 0;
        this.cabinaTripulacion = pCabinaTripulacion;
        this.cabinaVuelo = pCabinaVuelo;
        this.sistemaEmergencia = pSistemaEmergencia;
        this.numTanquesCombustible = pTanquesCombustible;
        this.numPuertasSalidas = pPuertasSalida;
    }
    Cubierta.prototype.ToString = function () {
        var mensaje = "Cubierta compuesta de: ";
        if (this.cabinaVuelo) {
            mensaje += 'Cubierta de Vuelo, ';
        }
        if (this.cabinaTripulacion) {
            mensaje += 'Cubierta de Tripulacion, ';
        }
        if (this.sistemaEmergencia) {
            mensaje += 'Sistema de Emergencia, ';
        }
        mensaje += this.numTanquesCombustible + ' Tanques de Combustible, ';
        mensaje += this.numPuertasSalidas + ' Puertas de Salida.';
        return mensaje;
    };
    return Cubierta;
}());
var Aeroplano = /** @class */ (function () {
    function Aeroplano(phelice, pTrenAterrizaje, pAlas, pCubierta) {
        this.helice = phelice;
        this.trenAterrizaje = pTrenAterrizaje;
        this.alas = pAlas;
        this.cubierta = pCubierta;
    }
    Aeroplano.prototype.ToString = function () {
        var mensaje = "Aeroplano compuesto por: ";
        mensaje += this.helice.ToString();
        mensaje += this.alas.ToString();
        mensaje += this.trenAterrizaje.ToString();
        mensaje += this.cubierta.ToString();
        return mensaje;
    };
    return Aeroplano;
}());
var helice = new Helice(1);
var trenDeAterrizaje = new TrenDeAterrizaje(3, 3);
var alas = new Alas(3, 3);
var cubierta = new Cubierta(false, true, false, 1, 1);
var avion = new Aeroplano(helice, trenDeAterrizaje, alas, cubierta);
console.log(avion.ToString());
