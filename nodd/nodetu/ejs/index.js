const express = require('express');
const path = require("path");
const app = express();


let dirPath = path.join(__dirname,"view");
app.set("view engine","ejs");

app.get('/profile',(_,resp)=>{
    const user = {
        name:"Arvind Parkash",
        email:"arvindparkash@gmail.com",
        phoneno:"7982019952"
    }
    resp.render(`${dirPath}/profile`,{user});
});

app.listen(5000);