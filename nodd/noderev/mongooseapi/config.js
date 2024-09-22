const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/product').then(()=>{
    console.log('conneted')
}).catch(()=>{
    console.log('not connectd')
});