// const { Collection } = require('mongoose');
const { connectToDatabase, closeConnection} = require('./dbconnect');


async function runApplication()
{

    const db = await connectToDatabase();

    try{

        const collections = await db.collection('comment').find().toArray();

        console.log('Collections in the database:', collections);
    }
    finally{
        closeConnection();
    }
}

runApplication();