'use strict'

const express = require('express');
const CampaniaController = require('../Controllers/campania');

const api = express.Router();
const md_auth = require('../Middlewares/authenticated');

api.get('/campania/:id',md_auth.ensureAuth, CampaniaController.getCampania);
api.get('/counters',md_auth.ensureAuth,CampaniaController.getCounters);
api.get('/campanias/:page?',md_auth.ensureAuth, CampaniaController.getCampanias);
api.put('/update-campania/:campainId',md_auth.ensureAuth, CampaniaController.updateCampania);

module.exports = api;