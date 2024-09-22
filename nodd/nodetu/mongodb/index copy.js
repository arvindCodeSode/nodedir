const mongoose = require("mongoose");

const dbURL = "mongodb+srv://arvinddb:4u7CnbinBYELzsZV@cluster0.bhumvuk.mongodb.net/youtube?retryWrites=true&w=majority";

const connectionParams ={
    useNewUrlParser:true,
    useUnifiedTopology:true
};

mongoose.connect(dbURL,connectionParams).
then(()=>{
    console.log('connected to db')

}).catch((e)=>{

    console.log('Error', e);
})
