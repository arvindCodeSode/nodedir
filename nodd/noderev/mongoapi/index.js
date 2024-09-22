const express = require("express");
const cors = require("cors");
// const read = require('./inventory/read');
const {dbconnect,dbclose} = require('./db/db');
let mongodb = require('mongodb');
const app = express();
app.use(cors());
app.use(express.json());

let inventoryCollection;
(async ()=>{
    let db = await dbconnect();
    inventoryCollection = db.collection('inventory');
    defineRoute();
    const PORT = 4500;
    app.listen(PORT,()=>{
        console.log(`App is working on ${PORT} port`);
    })

})()

function defineRoute(){

    app.get('/api/inventory', async (req,res)=>{
        let data = await  inventoryCollection.find().toArray();
        console.log(data);
            res.status(201).json(data);
    });
    app.get('/api/inventory/:id', async (req,res)=>{

        let productId = new mongodb.ObjectId(req.params.id);
        console.log(productId);
        let data  = await inventoryCollection.findOne({_id:productId});
        res.status(201).json(data);
    
    });
    app.post('/api/inventory', async (req,res)=>{
        let data = await inventoryCollection.insertOne(req.body);
        res.status(201).json(data);
    });
    app.put('/api/inventory/:id', async (req,res)=>{
        res.status(201).json({msg:'Working'});
    });
    app.delete('/api/inventory/:id', async (req,res)=>{
        res.status(201).json({msg:'Working'});
    });
    // Read All (GET)
    app.get('/products', async (req, res) => {
        try {
            const products = await inventoryCollection.find().toArray();
            res.json(products);
        } catch (error) {
            res.status(500).json({ error: 'Error fetching products' });
        }
    });

    // Read One (GET)
    app.get('/products/:id', async (req, res) => {
        try {
            const productId = require('mongodb').ObjectId(req.params.id);
            const product = await inventoryCollection.findOne({ _id: productId });
            if (product) {
                res.json(product);
            } else {
                res.status(404).json({ error: 'Product not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Error fetching product' });
        }
    });

    // Update (PUT)
    app.put('/products/:id', async (req, res) => {
        try {
            const productId = require('mongodb').ObjectId(req.params.id);
            const updatedProduct = req.body;
            const result = await inventoryCollection.updateOne(
                { _id: productId },
                { $set: updatedProduct }
            );
            if (result.modifiedCount > 0) {
                res.json({ message: 'Product updated successfully' });
            } else {
                res.status(404).json({ error: 'Product not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Error updating product' });
        }
    });

    // Delete (DELETE)
    app.delete('/products/:id', async (req, res) => {
        try {
            const productId = require('mongodb').ObjectId(req.params.id);
            const result = await inventoryCollection.deleteOne({ _id: productId });
            if (result.deletedCount > 0) {
                res.json({ message: 'Product deleted successfully' });
            } else {
                res.status(404).json({ error: 'Product not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Error deleting product' });
        }
    });
}

// app.get('/', (req,res)=>{
//     console.log('working');
//     res.json({status:'working'});
//     res.end();
// }); 
// app.get('/api/',async (req,res)=>{
//     let data = await read();
//     res.json(data);
// }); 
