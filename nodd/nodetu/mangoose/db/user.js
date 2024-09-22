const mongoose = require('mongoose');
let UserSchema = mongoose.Schema({
    name:String,
    email:String,
    Password:String
});

module.exports = mongoose.model('user',UserSchema);