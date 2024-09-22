const express = require('express');
const app = express();

const requestFilter =(req,res,next)=>{
    if(!req.query.age){
        res.send('Please provide age');
    }else{
        next();
    }
}
app.use(requestFilter)
app.get("/",(res,resp)=>{
    resp.send('helo');
    resp.end();
})
app.get("/about",(res,resp)=>{
    resp.send('about');
    resp.end();
})
app.listen(4500)