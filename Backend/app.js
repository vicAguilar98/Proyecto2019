'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const fs = require('fs');
const app = express();


const PageLogin = (fs.readFileSync('../Frontend/html/login.html'));

//cargar rutas
const user_routes = require('./Routes/user');
const campania_routes = require('./Routes/campania');
const typelist_routes = require('./Routes/typelist');

//middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '../Frontend'));

//cors

//rutas
app.get('/', (req,res) =>{ res.write(PageLogin)})
app.use('/api', user_routes);
app.use('/api', campania_routes);
app.use('/api', typelist_routes);

//exportar configuracion
module.exports = app;