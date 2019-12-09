let mongoose = require('mongoose');

let UserSchema = mongoose.Schema({
    
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        required: true
    },
});

let TypeListSchema = mongoose.Schema({
    idmail: String,
    namecompany: String,
    mail: {
        type: Array,
        min: 1,
        max: 80,
        required: true
    },
   
});

let CampañaSchema = mongoose.Schema({
    campainid: String,
    campainame: String,
    templated: String,
    Typelist: String,
    date: {
        type: Date,
        min: 1940-01-01,
        max: 2019-12-31,
        required: true
    },
   
});


module.exports = TypeListSchema;
module.exports = CampañaSchema;
module.exports = UserSchema;