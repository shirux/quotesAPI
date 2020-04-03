const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');


// Intermediarios
app.use(cors());
app.use(bodyParser.json());


// Importación de Rutas
const quotesRoute = require('./routes/quotes');
const authorsRoute = require('./routes/authors');


// Rutas del API
app.use('/authors', authorsRoute);
app.use('/quotes', quotesRoute);


// RUTAS
app.get('/', (req, res) => {
    res.send('Bienvenido al API de Frases celebres y Autores');
});


// Conexión DB
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true }, 
    () => console.log('Se ha conectado a la base de datos!')
 );


// Inicialización de server
app.listen(3000);
 

