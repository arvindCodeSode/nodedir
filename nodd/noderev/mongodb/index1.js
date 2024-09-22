const { MongoClient } = require('mongodb');

// Replace this URL with your MongoDB connection string
const uri = "mongodb://127.0.0.1:27017"; // For local MongoDB, replace with your Atlas URL if using the cloud
const client = new MongoClient(uri);

// console.log('working');
async function connectDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB!");
    return client.db('product'); // Specify the database you want to connect to
  } catch (err) {
    console.error('Connection failed', err);
  }
}
async function createDocument() {
    const db = await connectDB();
    const collection = db.collection('users');
    
    const newUser = { name: "John Doe", age: 30, email: "john@example.com" };
  
    const result = await collection.insertOne(newUser);
    console.log(`New document inserted with _id: ${result.insertedId}`);
  }

// Find one document
async function readDocument() {
    const db = await connectDB();
    const collection = db.collection('inventory');
    
    const user = await collection.findOne({ name: "John Doe" });
    console.log("Found User:", user);
  }
  
  // Find multiple documents
  async function readAllDocuments() {
    // console.log('working');
    const db = await connectDB();
    const collection = db.collection('inventory');
    // console.log(collection,'colectiion');
    const users = await collection.find().toArray();
    console.log("Found Users:", users);
  }
  async function updateDocument() {
    const db = await connectDB();
    const collection = db.collection('users');
    
    const filter = { name: "John Doe" };
    const update = { $set: { email: "john.doe@example.com" } }; // Use $set to update specific fields
  
    const result = await collection.updateOne(filter, update);
    console.log(`${result.matchedCount} document(s) matched, ${result.modifiedCount} document(s) updated`);
  }
  async function deleteDocument() {
    const db = await connectDB();
    const collection = db.collection('users');
    
    const filter = { name: "John Doe" };
  
    const result = await collection.deleteOne(filter);
    console.log(`${result.deletedCount} document(s) deleted`);
  }
  (async () => {
    // console.log('working');
    // await createDocument();
    // await readDocument();
    await readAllDocuments();
    // await updateDocument();
    // await deleteDocument();
  
    // Close the connection
    client.close();
  })();
          