const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    title:String,
    description:String,
    category:String,
    price:String,
    userId:String
});
module.exports = mongoose.model('products',productSchema);