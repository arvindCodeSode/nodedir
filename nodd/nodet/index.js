const express =  require("express");
const path = require('path');

const publicPath =  path.join(__dirname+'/public');

// console.log(publicPath);

const app = express();
// app.use(express.static(publicPath));

app.set('view engine', 'ejs');


app.get('/profile',(req,rep)=>{

    const user = {
        name:"Arvind Parkash", email:'arvindparkash@gmail.com'
    }
    rep.render('profile.ejs',{user});
})
app.get('', (req,res) => {
    res.sendFile(`${publicPath}/index.html`);
});
app.get('/home', (req,res) => {
    res.sendFile(`${publicPath}/help.html`);
});
app.get('/about', (req,res) => {
    res.sendFile(`${publicPath}/about.html`);
});
app.get("*", ( req, res ) => {
    res.sendFile(`${publicPath}/404.html`);
});

app.listen(4500)