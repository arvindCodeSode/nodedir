const mysql = require("mysql");

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'test'
});

connection.connect((err)=>{
    if(err){
        console.log('Cannot connect', err)
    }else{
        console.log('connected');
    }
});

connection.query("SELECT * FROM user",(err,result,fields)=>{
    console.log(result,fields);
})