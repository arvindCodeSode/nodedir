const mongoose = require("mongoose");
const Product = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true,
    },
    price:{
        require:true,
    },
    desc:{
        type:String,
        required:false,
    },
    availabe:{
        type:String,
        enum:['yes','no'],
        default:'yes',
        required:'yes'
    }
});
module.exports = mongoose.model('product',Product);