'use strict'

const Campania = require('../Models/campania');
const mongoosePagination = require('mongoose-pagination')

function getCampania(req, res){
    let campaniaId = req.params.id;

    Campania.findOne({campainid:campaniaId}, (err, campania) =>{
        if(err) return res.status(500).send({message:'Error en la peticion'});

        if(!campania) return res.status(404).send({message: 'La campañia no existe'});

        return res.status(200).send({campania});
    });
}
function getCounters(req, res){
    getCountCampanias().then((value) =>{
        return res.status(200).send(value);
    });
}

async function getCountCampanias(status){
    let campaniadelete;
    let campaniaregister;
        if(status){
            campaniaregister = await Campania.count({'status': status}).exec((err, count)=>{
                if(err) return handleError(err);
                return count;
            });
        }else{
            campaniadelete = await Campania.count({'status': status}).exec((err, count)=>{
            if(err) return handleError(err);
            return count;
        });}

    return {
        campaniaregister: campaniaregister,
        campaniadelete: campaniadelete
    }
}

function getCampanias(req, res){
    let identify_user_id = req.user.sub;
    let page = 1;
    if(req.params.page){
        page = req.params.page;
    }

    let itemsPerPage = 5;
    Campania.find().sort('_id').paginate(page, itemsPerPage, (err, campanias, total)=>{
        if(err) return res.status(500).send({message:'Error en la peticion'});

        if(! campanias) return res.status(404).send({message: 'No hay campañas disponibles'});

        return res.status(200).send({
            campanias,
            total,
            pages: Math.ceil(total/itemsPerPage)
        });
    });
}

function updateCampania(req, res){
    let campaniaId = req.params.campainId;
    let update = req.body;

    Campania.findOneAndUpdate({campainid: campaniaId},update,(err, campaniaUpdated) =>{
        if(err) return res.status(500).send({message: 'Error en la peticion'});

        if(!campaniaUpdated) return res.status(404).send({message: 'No se ha podido actualizar la campañia'});

        return res.status(200).send({campania: campaniaUpdated});
    });
}

module.exports = {getCampania, getCampanias, updateCampania, getCounters}