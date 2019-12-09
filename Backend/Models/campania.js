'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

let CampaniaSchema = schema({
    campainid: String,
    campainame: String,
    templated: String,
    Typelist: String,
    status: Boolean,
    date: {
        type: Date,
        max: 2019-12-31,
        required: true
    }, 
});

module.exports = mongoose.model('Campañas',CampaniaSchema);