const express = require("express");
const app = express();


 app.get('/help',(res, rep)=>{
    rep.send('Hello World');
 });
 app.get('/about', function(){

 })

 app.listen(4200);
 