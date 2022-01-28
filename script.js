var portfolio = {
    Nombre: "",
    Apellido: ""
};
function GetNombre(nombre) {
    var nombre1 = document.getElementById("Name");
    nombre1.textContent = nombre;
}
function GetApellido(apellido) {
    var apellido1 = document.getElementById("Surname");
    apellido1.textContent = apellido;
    return portfolio.Apellido = apellido;
}
function showFile(input) {
    var file = input.files[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function (progressEvent) {
        var s = reader.result.toString();
        console.log(s);
        var arr = s.split('\n');
        GetNombre(arr[0]);
        GetApellido(arr[1]);
    };
}
