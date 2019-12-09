'use strict'

const UrlmongoDb ="mongodb+srv://vicDB:Erendil12@cluster0-mjdby.mongodb.net/ProyectoWeb?retryWrites=true&w=majority";
const mongoose = require('mongoose');
const app = require('./app');
const hostname = '127.0.0.1';
const port = 3800;

//Conexion base de datos y servidor
mongoose.Promise = global.Promise;
mongoose.connect(UrlmongoDb,{useMongoClient: true})
.then(()=>{
    console.log("La conexion a la base de datos"+ 
    " se ha realizado correctamente");
    app.listen(port, () =>{
        console.log(`Servidor corriendo en http://${hostname}:${port}`);

    });
}).catch(err => console.log(err))
