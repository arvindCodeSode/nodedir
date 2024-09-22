const db = require('../db/db');


const insert = async ()=>{
    const dbconnect =  await db();
    const productTable = dbconnect.collection('inventory');
    const product = await  productTable.find().toArray();
    // console.log(product);
    return product;

}
module.exports = insert;