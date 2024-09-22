const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());
const secretKey ='Arvind';


app.get('/', (req,res)=>{
    res.status(200).json({
        status:true,
        message:'Found'
    })
});

app.post('/login', (req,res)=>{
    console.log(req.body.email);
    if(req.body.email=="arvind@gmail.com")
    {
        const user = {
            id:1,
            username:'arvind',
            email:'arvind@gmail.com'
        }
        jwt.sign({user},secretKey,{expiresIn:'300s'},(err,token) =>{
            
            if(err)
            {
                return res.status(400).json({
                    status:false,
                    message:'Oops! Something went wrong. Please try again'
                })
            }else{
                return res.status(200).json({
                    status:true,
                    data:user,
                    token:token
                })
            }
        })
        
    }else{
        return res.status(500).json({
            status:false,
            message:'Server Error',
        })

    }

});
app.post('/profile',verifyToken,(req,res)=>{

    jwt.verify(req.token,secretKey,(err,authData)=>{
        return res.status(200).json({
            status:true,
            user:authData,
            message:'Found the details',
        })
    })
});

function verifyToken(req,res,next){
    const tokenHeader = req.headers['authorization'];
    if(typeof tokenHeader != 'undefined')
    {
        const token_ar = tokenHeader.split(" ");
        const token = token_ar[1];
        req.token = token;
        next();
        
    }else{
        res.status(400).json({
            status:false,
            error:'error',
            message:'Invalid Token'
        })
    }

}


app.listen(5000,()=>{
    console.log('app is running on 5001 port')
})  