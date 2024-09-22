const express = require("express");
const cors = require("cors");
require('./db/db');
const User = require("./db/user");
const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req,res) => { 
    res.send("hello");
});
app.post('/register', async (req,res) => { 
    let nameE=true;
    let emailE=true;
    let passwordE=true;
    const { name, email, password } = req.body;
    let errorD=[];
    
    
    if( !name ){
        let error={};
        nameE=false;
        error.message='Name is required';
        error.field='name';
        errorD.push(error);
    }
    if( !email ){
        let error={};

        emailE=false;
        error.message='Email is required';
        error.field='email';
        errorD.push(error);
    }
    if( !password ){
        let error={};

        passwordE = false;
        error.message='Password is required';
        error.field='password';
        errorD.push(error);
    }
    if(nameE && emailE && passwordE)
    {
        let user = new User(req.body);
        let data = await user.save();
        let sdata={status:true,data:data};
        res.status(200);
        res.send(JSON.stringify(sdata));
    }else{
        let data={status:false,data:errorD};
        res.status(400);
        res.send(JSON.stringify(data));

    }
});


app.listen(5000);