'use strict'

function Validelogin(){
    var user = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if(user===null && password===null ||user==="" || password===""){
        alert("Ingrese usuario o password, campo(s) vacio(s)");
    }else{
        alumnos = await leerDatosDelJSON();
        if(usuario.find(u => u.username.toUpperCase() === user.toUpperCase())>0){
           if(usuario.find(u => u.password.toUpperCase() === password.toUpperCase())>0){
            locate="inicio.html";
            return false;
           }else
           alert("Contraseña incorrecta");
        }else{
        alert("El usuario no esta registrado");
        }
    }
}

module.exports = { Validelogin}