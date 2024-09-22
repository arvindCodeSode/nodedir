const { MongoClient } = require('mongodb');

// Replace this URL with your MongoDB connection string
const uri = "mongodb://127.0.0.1:27017"; // For local MongoDB, replace with your Atlas URL if using the cloud
const client = new MongoClient(uri);

const connect = async function connectDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB!");
    return client.db('product'); // Specify the database you want to connect to
  } catch (err) {
    console.error('Connection failed', err);
  }
}

module.exports=connect;
