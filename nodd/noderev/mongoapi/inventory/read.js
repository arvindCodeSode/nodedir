const {dbconnect,dbclose} = require('../db/db');

const read = async ()=>{
    let connect = await dbconnect();
    let inventory = connect.collection('inventory');
    let inventoryData = await inventory.find().toArray();
    return inventoryData
}
module.exports = read;