const express =  require('express');
const path  = require('path');
const app = express();

let dirPath = path.join(__dirname,'public');

app.get("/",(req,resp)=>{
    resp.sendFile(`${dirPath}/index.html`);
});
app.get("/home",(req,resp)=>{
    resp.sendFile(`${dirPath}/home.html`);
});
app.get("/about",(req,resp)=>{
    resp.sendFile(`${dirPath}/about.html`);
});
app.get("*",(req,resp)=>{
    resp.sendFile(`${dirPath}/404.html`);
});
app.listen(5000);