const express = require("express");
const app = express();
require('./db/db');
const User = require('./db/user');

app.use(express.json());

app.post('/register', async (req,res) =>{
    res.send('working');
});