const express = require('express');
const app = express();

app.get('/', (res, rep)=>{

    rep.send('Home Page');
 });
app.get('/help', (res, rep)=>{ 

    rep.send('Help Page');
});
app.get('/about', (req, rep)=>{ 
    console.log(req.query.id);
    rep.send(`About Page `);
});
app.listen(4200);