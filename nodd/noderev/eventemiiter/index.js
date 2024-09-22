const express = require("express");
const EventEmitter = require("events");
const app = express();
const emit = new EventEmitter();
let count =0;
emit.on("callapi",()=>{
    console.log("calling event",count++);
})

app.get('/',(req,res)=>{
    emit.emit('callapi');
    res.send('hello world')
});
app.listen(4500);