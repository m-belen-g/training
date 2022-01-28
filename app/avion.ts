class Turbina {
    private numTurbinas:number=0;
    public constructor(n:number) {
        this.numTurbinas = n;
    }
    public ToString() {
        return this.numTurbinas + 'Turbina/s';
    }
}

class Helice {
    private numHelices:number=0;
    public constructor(numheli:number) {
        this.numHelices = numheli;
    }
    public ToString() {
        return this.numHelices + ' Helice/s, ';
    }
}

class TrenDeAterrizaje {
    private numNeumaticos:number=0;
    private numAmortiguadores:number=0;

    public constructor(nNeum:number, nAmort:number) {
        this.numNeumaticos=nNeum;
        this.numAmortiguadores=nAmort;
    }

    public ToString() {
        return 'Tren de aterrizaje fijo que tiene ' + this.numNeumaticos + ' Neumaticos y ' + this.numAmortiguadores + ' Amortiguadores, '
    }
}

class Alas {
    private numAlasFrontales:number=0;
    private numAlasCola:number=0;

    public constructor(frontales:number,cola:number) {
        this.numAlasFrontales = frontales;
        this.numAlasCola = cola;
    }

    public ToString() {
        return this.numAlasFrontales + " Alas Frontales, " + this.numAlasCola + " Alas de Cola, "
    }
}

class Cubierta {
    private cabinaTripulacion:boolean = false;
    private cabinaVuelo:boolean = false;
    private sistemaEmergencia:boolean = false;
    private numTanquesCombustible:number = 0;
    private numPuertasSalidas:number = 0;

    public constructor(pCabinaTripulacion:boolean, pCabinaVuelo:boolean, pSistemaEmergencia:boolean, pTanquesCombustible:number, pPuertasSalida:number) {
        this.cabinaTripulacion = pCabinaTripulacion;
        this.cabinaVuelo = pCabinaVuelo;
        this.sistemaEmergencia = pSistemaEmergencia;
        this.numTanquesCombustible = pTanquesCombustible;
        this.numPuertasSalidas = pPuertasSalida;
    }

    public ToString() {
        let mensaje = "Cubierta compuesta de: ";
        if (this.cabinaVuelo) {
            mensaje+='Cubierta de Vuelo, ';
        }
        if (this.cabinaTripulacion) {
            mensaje+='Cubierta de Tripulacion, '; 
        }
        if (this.sistemaEmergencia) {
            mensaje+='Sistema de Emergencia, ';
        }
        mensaje += this.numTanquesCombustible + ' Tanques de Combustible, ';
        mensaje += this.numPuertasSalidas + ' Puertas de Salida.';
        return mensaje;
    }
}

class Aeroplano
{
    private helice: Helice ;
    private trenAterrizaje:TrenDeAterrizaje ;
    private alas:Alas;
    private cubierta:Cubierta;

    constructor(phelice:Helice, pTrenAterrizaje:TrenDeAterrizaje, pAlas:Alas, pCubierta:Cubierta) {
        this.helice = phelice;
        this.trenAterrizaje = pTrenAterrizaje;
        this.alas = pAlas;
        this.cubierta = pCubierta;
    }
    public ToString() {
        let mensaje = "Aeroplano compuesto por: ";
        mensaje+= this.helice.ToString();
        mensaje+= this.alas.ToString();
        mensaje+= this.trenAterrizaje.ToString();
        mensaje+= this.cubierta.ToString();
        return mensaje;
    }
}

let helice=new Helice(1);

let trenDeAterrizaje=new TrenDeAterrizaje(3,3);

let alas=new Alas(3,3);

let cubierta=new Cubierta(false,true,false,1,1);

let avion=new Aeroplano(helice,trenDeAterrizaje,alas,cubierta);
console.log(avion.ToString());


