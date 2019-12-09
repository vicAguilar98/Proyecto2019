'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

let TypelistSchema = schema({
    idmail: String,
    namecompany: String,
    status: Boolean,
    mail: {
        type: Array,
        min: 1,
        max: 80,
        required: true
    },
});

module.exports = mongoose.model('Typelist',TypelistSchema);