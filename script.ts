interface Persona {
    Nombre: string;
    Apellido: string;
}

let portfolio:Persona= {
    Nombre:"",
    Apellido:"",
}
/*
function GetNombre(nombre:string):void {
    const nombre1 = document.getElementById("1");
    nombre1.textContent=nombre;
}

function GetApellido(apellido:string):string {
    const apellido1 = document.getElementById("2");
    apellido1.textContent=apellido;
    return portfolio.Apellido=apellido
}

function showFile(input:any):void {
    let file=input.files[0];

    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function(progressEvent) {
        var s=reader.result.toString();
        console.log(s);
        var arr = s.split('\n');
        GetNombre(arr[0]);
        GetApellido(arr[1])
    };

}
*/