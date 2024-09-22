const express =  require("express")
const app =  express();
require("./config");
const cors = require('cors');
// const inventory = require("./models/Inventory");
const Inventory = require("./models/Inventory");
const multer = require("multer");
app.use(cors());
app.use(express.json());

const upload = multer({
    storage:multer.diskStorage({
        destination: function(req,file,cb){
            cb(null,'uploads')
        },
        filename: function(req,file,cb){
            cb(null,file.fieldname+"_"+Date.now()+".jpg");
        }
    })
}).single('user_file');

app.get('/', async (req,res)=>{
    let data = await Inventory.find();
    console.log(data,'heo');
    res.status(201).json(data);
});
app.post('/upload', upload, async (req,res)=>{
    res.status(201).json('hello');
});
app.get('/search/:query', async (req,res)=>{
    let data = await Inventory.find({
        "$or":[
            {"title":{ $regex:req.params.query,$options:"i" }}
        ]
    });
    console.log(data,'heo');
    res.status(201).json(data);
});
app.post('/add', async (req,res)=>{
    console.log(req.body);
    let user  = new Inventory({
        title:req.body.title,
        category:req.body.category,
        quantity:req.body.quantity,
        available:req.body.available,
    })
    try{
        let data = await user.save();
        res.status(201).json(data);
    }
    catch(err)
    {
        res.status(500).json(err);
    }
});
app.listen(4500);