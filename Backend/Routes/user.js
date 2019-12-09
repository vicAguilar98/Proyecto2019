'use strict'

const express = require('express');
const UserController = require('../Controllers/user');

const api = express.Router();
const md_auth = require('../Middlewares/authenticated');

api.post('/login', UserController.login);
api.get('/logout',UserController.logout);
api.post('/register',UserController.saveUser);
/** Metodo posteriore del logeo
 * api.get('/main',md_auth.ensureAuth,UserController.logout);
 */

module.exports = api;
