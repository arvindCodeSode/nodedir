const  express = require("express");
const  path = require("path");
const publicPath = path.join(__dirname,'public');

const app = express();
app.use(express.static(publicPath))
app.set("view engine",'ejs');
app.set('views','./views');
app.get('/',(res,resp)=>{
    resp.render('index.ejs',{title:'First website'})
});
app.get('*',(res,resp)=>{
    resp.render('404.ejs')
});
app.listen(4500,(msg)=>{
    console.log('This port is running on 4500 port');
});
