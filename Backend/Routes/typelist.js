'use strict'

const express = require('express');
const TypelistController = require('../Controllers/typelist');

const api = express.Router();
const md_auth = require('../Middlewares/authenticated');

api.get('/tyelist/:id',md_auth.ensureAuth, TypelistController.getTypelist);
api.get('/tyelists/:page?',md_auth.ensureAuth, TypelistController.getTypelists);
//api.post('/addemail',md_auth.ensureAuth, TypelistController.updateCampania);

module.exports = api;
