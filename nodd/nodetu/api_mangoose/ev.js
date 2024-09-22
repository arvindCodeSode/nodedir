const EventEmitter = require("events");
const express = require("express");
const app = express();

const event = new EventEmitter();
let count=0;
event.on("CallApi",()=>{
    count++;
    console.log("call",count);
})

app.get('/get',(req,res)=>{
    res.send('Hello World');
    event.emit('CallApi');
});
app.get('/list',(req,res)=>{
    res.send('Hello World');
});
app.get('/set',(req,res)=>{
    res.send('Hello World');
});

app.listen(5000);