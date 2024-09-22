const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    available:{
        type:String,
        enum:['yes','no'],
        required:true,
        default:'no'
    },
    quantity:{
        type:Number,
        required:true
    }
});
module.exports = mongoose.model('inventory',inventorySchema);