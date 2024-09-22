const express = require('express');
const app = express();

const requestFilter =(req,res,next)=>{
    if(!req.query.age){
        res.send('Please provide age');
    }else{
        next();
    }
}

app.get("/",requestFilter,(res,resp)=>{
    resp.send('helo');
    resp.end();
})
app.listen(4500);