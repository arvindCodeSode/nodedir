const http = require('http');

http.createServer((req,resp)=>{
    console.log(req);
    resp.write('helo')
    resp.end();
}).listen(4500)