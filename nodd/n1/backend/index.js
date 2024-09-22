const express = require("express");
const cors = require("cors");
const yup = require('yup');
const bcrypt = require("bcrypt");
const userValidation = require('./validation/user');
const loginValidation = require('./validation/userLogin');
const productValidation = require("./validation/product");
require('./db/db');
const User = require("./db/user");
const Product = require("./db/product");
const app = express();

//Middleware
app.use(cors());
app.use(express.json());

// For the dashboard
app.get('/', (req,res)=>{
    res.send('Working');
});

//for the user creation
app.post('/user/register', async (req,res)=>{
    let status = {
        status:true,
        data:'',
        message:''
    };
    try{
        const validatedUser = await userValidation.validate(req.body,{abortEarly:false});
        const hasPassword = await bcrypt.hash(validatedUser.password,10);
        
        let result = new User({
            name:validatedUser.name,
            password:hasPassword,
            email:validatedUser.email
        });

        let data = await result.save();
        const {password, ...allotherData} = data.toObject();
        status.data = allotherData;
        status.message = 'User Created Successfully';
        return res.status(201).json(status);
    }
    catch(err){
        let name=[],email=[],password=[],confirmPassword=[];
            err.inner.forEach((error,acc )=>{
                if(error.path=='name')
                {
                    name.push(error.message);
                }
                if(error.path=='email')
                {
                    email.push(error.message);
                }
                if(error.path=='password')
                {
                    password.push(error.message);
                }
                if(error.path=='confirmPassword')
                {
                    confirmPassword.push(error.message);
                }
            })
        let error ={
            name:name,
            email:email,
            password:password,
            confirmPassword:confirmPassword
        }
       

        return res.status(400).json({
            status:false,
            message:'Validation Faild',
            errors:error
        })
    }
    res.status(500).json({
        status: 'error',
        message: 'Internal Server Error',
        errors: err.message
    });

});

//For the user login
app.post('/user/login',async (req,res)=>{
   
    try{
        const validatedLogin = await loginValidation.validate(req.body,{abortEarly:false});
        const user = await User.findOne({email:validatedLogin.email});
        if(!user){
            return res.status(401).json({
                status:false,
                message:'Invalid Email Or Password1'
            });
        }
        const isPasswordValid = await bcrypt.compare(validatedLogin.password,user.password);
        if(!isPasswordValid){
            return res.status(401).json({
                status:false,
                message:'Invalid Email or Password'
            });
        }
        const {password, ...allotherData} = user.toObject();
            return res.status(200).json({
                status:true,
                message:'Login Successfully',
                data:allotherData
            });

    }
    catch(err){
        return res.status(401).json({
            status:false,
            message:err.message,
            error:err.errors
        })
    }
    res.status(500).json({
        status:false,
        message:'Internal Server Error'
    })
})

app.get('/products', async (req,res)=>{
    try{
        const page = parseInt(req.query.page) || 1;
        const limit = 10;
        const skip = (page-1)*limit;
        const products = await Product.find().skip(skip).limit(limit);
        const total = await Product.countDocuments();
        if(total>0)
        {
            return res.status(201).json({
                status:true,
                message:'Data fetch successfully',
                data:products,
                limit:limit,
                page:page,
                total:total
            })
            
        }
        return res.status(201).json({
            status:false,
            message:'Data fetch successfully',
            data:[],
        })

    }
    catch(err){
        return res.status(400).json({
            status:false,
            message:'Data nout found',
            error:err.message
        })
    }
    return res.status(500).json({
        status:false,
        message:'Internal server error',
    })
})

// app.post('/products/create',(req,res)=>{

// });

app.listen(5000);