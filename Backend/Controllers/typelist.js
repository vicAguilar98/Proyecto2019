'use strict'

const Typelist = require('../Models/typelist');
const mongoosePagination = require('mongoose-pagination')

function getTypelist(req, res){
    let typelistId = req.params.id;
    
    Typelist.findOne({idmail:typelistId}, (err, typelist) =>{
        if(err) return res.status(500).send({message:'Error en la peticion'});

        if(!typelist) return res.status(404).send({message: 'El mail no existe'});

        return res.status(200).send({typelist});
    });
}

function getTypelists(req, res){
    let identify_user_id = req.user.sub;
    let page = 1;
    if(req.params.page){
        page = req.params.page;
    }

    let itemsPerPage = 5;
    Typelist.find().sort('_id').paginate(page, itemsPerPage, (err, typelists, total)=>{
        if(err) return res.status(500).send({message:'Error en la peticion'});

        if(! typelists) return res.status(404).send({message: 'No hay emails disponibles'});

        return res.status(200).send({
            typelists,
            total,
            pages: Math.ceil(total/itemsPerPage)
        });
    })
}

module.exports = { getTypelist, getTypelists}