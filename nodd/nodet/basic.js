const http = require('http');

http.createServer((res, rep) => {
    rep.writeHead(200,{ 'Content-type':'Application/json' });
    rep.write(JSON.stringify({name:'Arvind Parkash'}));

}).listen(5000)