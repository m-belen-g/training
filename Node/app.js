const http = require('http');

// se muestran en el servidor local puerto 3000, puerto local

const server = http.createServer((req, res) =>{
    res.end('Estoy respondiendo a tu solicitud v3')
});
// Si actualizo no veo nada, reberia reiniciar el servidor escribiendo nuevamente node app.jr en consola. 
// Esto no es optimo, por lo que deberia instalar un paquetito Nodemon para solucionarlo

const puerto = 3000;

server.listen(puerto,() => {
    console.log('Escuchando solicitudes')
})