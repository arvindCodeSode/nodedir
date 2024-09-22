const express = require("express");
const app = express();
const path = require("path");
const publicPath = path.join(__dirname,'public');

app.get('/',(req,resp)=>{
    resp.sendFile(`${publicPath}/index.html`);
})
app.get('/about',(req,resp)=>{
    resp.sendFile(`${publicPath}/about.html`);
})

app.get('*',(req,resp)=>{
    resp.status(403).send('redirect');
    resp.sendFile(`${publicPath}/404.html`);
})
app.listen(4500);