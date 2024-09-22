const express = require("express");
const cors = require("cors");
const app = express();
require('./db/db');
const User = require('./db/user');

app.use(express.json());
app.use(cors());
app.post('/register', async (req,res) =>{
    let user = new User(req.body);
    let data = await user.save(); 
    res.send('working'+JSON.stringify(data));
});

app.listen(5000);