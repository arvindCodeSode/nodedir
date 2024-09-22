const express = require("express");
const multer = require("multer");
// const upload = multer({dest:'uploads/'});

const upload = multer({
    storage: multer.diskStorage({
        destination:function(req,file, cb){
            cb(null,'uploads');
        },
        filename: function(req,file,cb){
            cb(null,file.filename+'-'+Date.now()+'.jpg');
        }
    })
}).single('avatar');

const app = express();

app.get('/', (req,res)=>{
    res.send('working');
})
app.post('/profile', upload, function(req,res){
  res.send('Uploaded successfully');
})

// app.post('/profile/upload', upload.array('photos',12), (req,res)=>{

// });
app.listen(5300);