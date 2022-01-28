const express = require ('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send('Mi respuesta desde express v2')
})

app.get('/servicios', (req, res) => {
    res.send('Estas en la pagina de servicios')
})

app.listen(port, ()=> {
    console.log('Servidor a su servicio en el puerto', port)
})