const express = require('express');
const app = express();
const middleware  = require('./middleware');
const route = express.Router();

route.use(middleware);


app.get("/",(res,resp)=>{
    resp.send('helo');
    resp.end();
})
route.get('/about',(req,res)=>{
    res.send('about page');
    res.end();
});
route.get('/product',(req,res)=>{
    res.send('Product Page');
    res.end();
});
app.use('/',route);
app.listen(4500);