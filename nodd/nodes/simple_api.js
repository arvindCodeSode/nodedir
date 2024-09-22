const http = require('http');
// const { json } = require('stream/consumers');

http.createServer((req,res)=>{
    res.writeHead(201,{'Content-type':'application/json'});
    res.write(JSON.stringify({name:"Arvind Parkash",email:"arvind@gmail.com"}));
    res.end();
}).listen(5000);