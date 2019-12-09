'use strict'

const jwt = require('jwt-simple');
const moment = require('moment');
const secret ='vicDB:Erendil12';

exports.createToken = function(user){
    let payload = {
        sub: user._id,
        name: user.username,
        iat: moment().unix(),
        exp: moment().add(30, 'days').unix
    };

    return jwt.encode(payload, secret);
};