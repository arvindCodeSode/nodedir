const express = require("express");
require('./config');
const comment = require("./com");
const multer = require("multer");

const upload = multer({
    storage:multer.diskStorage({
        destination: function(req,file,cb){
            cb(null,'upload');
        },
        filename:function(req,file,cb){
            cb(null, file.fieldname+"-"+Date.now()+".jpg")
        }
    })
}).single('user_file');

const app = express();

app.use(express.json());

app.post("/upload", upload, (req,res)=>{
    console.log('file uploaded');
    res.send('file upload');
    res.end();
})
app.get("/list", async (req,resp)=>{

    let result = await comment.find();
    let data ={
        status:true,
        data:result
    }
    resp.send(data);
    resp.end();
});
app.get("/search/:q", async (req,resp)=>{

    let result = await comment.find({
        "$or":[
            {name:{ $regex:req.params.q }}
        ]
    });
    let data ={
        status:true,
        data:result
    }
    resp.send(data);
    resp.end();
});
app.post("/add", async (req, resp)=>{

    let body = req.body;
    let commentModel = new comment(
        body
    )
    let result = await commentModel.save();
    let data ={
        status:true,
        data:result
    }
    resp.send(data);
    resp.end();
});

app.put("/update/:name", async (req, resp)=>{

    let body = req.body;
    let name = req.query.name;
    let result = await comment.updateOne({name:name},{$set:{body}});
    let data ={
        status:true,
        data:result
    }
    resp.send(data);
    resp.end();
});
app.delete("/delete/:name", async (req, resp)=>{

    let body = req.body;
    let name = req.params.name;
    let result = await comment.deleteOne({name:name});
    let data ={
        status:true,
        name:name,
        data:result,
    }
    resp.send(data);
    resp.end();
});
app.listen(5000);

