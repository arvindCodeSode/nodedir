const express = require("express");
const requestFilter = require('./middleware');
const app = express();
const route = express.Router();


route.use(requestFilter);
// app.use(reqestFilter);

app.get('/',requestFilter,(req,resp)=>{
    resp.send('Welcome to home page')    
});
route.get('/user',(req,resp)=>{
    resp.send('Welcome to User page')    
});
route.get('/profile',(req,resp)=>{
    resp.send('Welcome to Profile page')    
});
app.use(route);
app.listen(5000);