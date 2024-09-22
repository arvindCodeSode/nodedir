const {MongoClient} =  require("mongodb");
let url = "mongodb://127.0.0.1:27017/";
let client = new MongoClient(url);

const dbconnect = async ()=>{
    try {
        await client.connect();
        console.log('Database Connected');
        return client.db('product');
    } catch (error) {
        console.log('Connection Failed', error);
    }
} 
const dbclose = async ()=>{
    client.close();
    console.log('connection close');
}
module.exports ={dbconnect,dbclose};