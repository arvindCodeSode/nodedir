const { connectToDatabase, closeConnection } =  require('./dbconnect');


const update = async () =>{

    const db = await connectToDatabase();

    const collection =  db.collection('comment');
    console.log(await collection.updateOne({name:'Sonu1'},{$set:{ email:'sonu1@gmail.com' }}));
}

update();