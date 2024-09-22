const {connnect,closeConnection} = require('./dbconnect');
const express = require("express");
const app = express();

app.use(express.json());

const dbconnect = async ()=>{
    let db = await connnect();
    let collection = db.collection('comment');
    return collection;
}

app.get('/', async (req,resp)=>{

    let db = await connnect();
    let collection = db.collection('comment');

    let result = await collection.find().toArray();
    const data = {
        status:true,
        data:result
    }
    resp.send(data );
});

app.post('/', async (req,resp)=>{

    let db = await connnect();
    try{
        let collection = db.collection('comment');
        let data ={};
        // let result = await collection.insertOne(req.body);
        let result = await collection.insertOne({
            "name":"Arvind Parkash",
            "email":"arvindparkash11@gmail.com",
            "mobile":88787879788
          });
        // console.log(req.body);
        data = {
            status:true,
            data:result
        }
    }
    catch(error){
        data = {
            status:true,
            data:error
        }
        console.error('Error', error);
    }
    resp.send(data);
});

app.listen(5000);

// closeConnection();