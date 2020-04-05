//Requires
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//Inicializar variables
var app = express();

//Body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//Importar rutas
var appRoutes = require('./routes/app');
var usuarioRoutes = require('./routes/usuarios');
var loginRoutes = require('./routes/login');

//Conexion a la base de datos
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (error, response) => {
    if (error) throw error;

    console.log('Base de datos: \x1b[32m%s\x1b[0m', 'online');
});

//Escuchar peticiones
app.listen(3000, () => {
    console.log('Express server puerto 3000: \x1b[32m%s\x1b[0m', 'online');
});

//Rutas
app.use('/usuarios', usuarioRoutes);
app.use('/login', loginRoutes);
app.use('/', appRoutes);