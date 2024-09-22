const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://arvinddb:Mongo1999@cluster0.bhumvuk.mongodb.net/youtube?retryWrites=true&w=majority");

console.log('connected');
const productShema = new mongoose.Schema({
   name:String,
   email:String
})
let productModel = mongoose.model('comment', productShema);

const insert = async () =>{
     let data = new productModel({
      name:'Arvind1 Parkash',
      email:'arvind1@gmail.com'
     });
   //   console.log(await productModel.find());
     let result = await data.save();
     console.log('get',result);
}

const find = async () =>{

   console.log(await productModel.find());

}
const deletea = async () =>{


   // console.log(await productModel.find());
   let result = await productModel.deleteOne({email:"arvind@gmail.com"});
  //  console.log('get',result);
}
const update = async () =>{

   // console.log(await productModel.find());
   let result = await productModel.deleteOne({email:"arvind@gmail.com"},{$set:{name:"Sonu"}});
   console.log('get',result);
}
find();