const mongoose = require('mongoose');


const run = async () =>{

     await mongoose.connect("mongodb+srv://arvinddb:Mongo1999@cluster0.bhumvuk.mongodb.net/?retryWrites=true&w=majority");

     let productShema = mongoose.Schema({
        name:String,
     })
     let productModel = mongoose.model('comment', productShema);
     let data = new productModel({
      name:'Arvind Parkash'
     });
     let result = await data.save();
     console.log('get',result);
}
run();