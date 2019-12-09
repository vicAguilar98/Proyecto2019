'use strict'

const mongoose = require('mongoose')
const schema = mongoose.Schema;

let UserSchema = schema({    
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('User',UserSchema);