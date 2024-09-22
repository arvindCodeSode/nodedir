const mysql = require("mysql");

const conn= mysql.createConnection({
    host:"localhost",
    database:'product',
    user:'root',
    password:''
});

conn.connect((err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log('connected');
        
    }
});
module.exports = conn;