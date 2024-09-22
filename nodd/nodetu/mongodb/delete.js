const { connectToDatabase, closeConnection } =  require('./dbconnect');


const deleteo = async () =>{

    const db = await connectToDatabase();

    const collection =  db.collection('comment');
    console.log(await collection.deleteOne({name:'Sonu1'}));
}

deleteo();