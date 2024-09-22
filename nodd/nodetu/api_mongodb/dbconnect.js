const { MongoClient } = require('mongodb');


const url = "mongodb+srv://arvinddb:Mongo1999@cluster0.bhumvuk.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(url);

const dbName = 'youtube';

async function connnect()
{
    try{
        await client.connect();
        console.log('Database connected successfully');
        return client.db(dbName);
    }
    catch(error)
    {
        console.error('Error while connecting to datbase', error);
        throw error
    }
}

 function closeConnection(){
    client.close();
    console.log('Connection Closed');
 }

 module.exports = {
    connnect, closeConnection
 }