const { connectToDatabase,closeConnection } = require('./dbconnect');


async function insertData(){
    const db = await connectToDatabase();
    try{
        console.log(await db.collection('comment').insertMany(
            [
                {
                    name:'Sonu',
                    email:'Email@emailk.com',
                    mobile:3333333
                },
                {
                    name:'Sonu1',
                    email:'Email1@emailk.com',
                    mobile:3333333
                },
                {
                    name:'Sonu2',
                    email:'Email2@emailk.com',
                    mobile:3333333
                },
            ]
        ));
    }
    finally{
        closeConnection();
    }
}

insertData();