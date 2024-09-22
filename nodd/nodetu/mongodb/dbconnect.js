const { MongoClient, ClientEncryption } = require("mongodb");

const url = "mongodb+srv://arvinddb:Mongo1999@cluster0.bhumvuk.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(url);

const dbName = 'youtube';

async function connectToDatabase()
{
    try{
        await client.connect();
        console.log('Connected to the database');
        return client.db(dbName);
    }
    catch( error )
    {
        console.error('Error whilie connecting to the database', error);
        throw error;
    }
}
function closeConnection()
{
    client.close();
    console.log('Connection Closed');
}

module.exports= {
    connectToDatabase,closeConnection
};