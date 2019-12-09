'use strict'

const User = require('../Models/user');
const bcrypt = require('bcrypt-nodejs');
const jwt = require('../Services/jwt');

function login(req, res){
    let params = req.body;

    let username = params.username;
    let password = params.password;

    User.findOne({username: username}, (err, user) =>{
        if(err) return res.status(500).send({message:'Error en la peticion'});

        if(user){
            bcrypt.compare(password, user.password, (err, check)=>{
                if(check){
                    if(params.gettoken){
                        //Devolver el token
                        return res.status(200).send({
                            token:jwt.createToken(user)
                        });
                    }else{
                        //Cambiar la pantalla porque logiado
                        user.password = undefined;
                        return res.status(200).send({user});
                    }
                }else{
                    return res.status(404).send({message:'La contraseña es incorrecta!!'});
                }
            })
        }else{
            return res.status(404).send({message:'El usuario no existe!!'});
        }
    });
}

function logout(req, res){

}

function saveUser(req, res){
    let params = req.body;
    let user = new User();

    if(params.username && params.password){
        user.username = params.username;
        user.password = params.password;

        //Busca si esta registrado el usuario
        User.find({ $or:[
            {username: user.username.toLowerCase()}
        ]}).exec((err, users) =>{
            if(err) return res.status(500).send({message:'Error al buscar usuarios repetidos'});

            if(users && users.length >= 1){
                return res.status(200).send({message: 'El usuario que intenta registrar ya existe!!'});
            }
        });

        //Cifra la contraseña y en guarda los datos en MongoDB
        bcrypt.hash(params.password,null, null,(err, hash) =>{
            user.password = hash;

            user.save((err, userStored)=>{
                if(err) return res.status(500).send({message:'Error al guardar el usuario'});

                if(userStored){
                    res.status(200).send({user: userStored});
                }else{
                    res.status(404).send({messange: 'No se ha registrado el usuario'});
                }
            }); 
        });
    }else{
        res.status(200).send({
            message:'Envia todos los campos necesarios!!'
        });
    }
}

module.exports = { login, logout, saveUser}