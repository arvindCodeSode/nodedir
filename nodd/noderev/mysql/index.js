const conn = require('./config')
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// conn.query("SELECT * FROM `users`",(err,result)=>{
//     console.log(err,result);
// });
app.use(bodyParser.json());

app.get("/api/users",  (req,res)=>{
    const query = "SELECT * FROM `users`";
    conn.query(query,(err,result)=>{
        if(err){
            res.status(404).json({message:err});
        }else{
            res.status(200).json(result);
        }
    });
})
app.post("/api/users",  (req,res)=>{
    const query = "INSERT INTO `users`(`name`,`email`,`password`,`created_at`) VALUES(?,?,?,?)";
    const {name,email,password,created_at} = req.body;
    conn.query(query,[name,email,password,created_at],(err,result)=>{
        if(err){
            res.status(404).json({message:err});
        }else{
            res.status(200).json({message:"User Created",id: result.insertId });
        }
    });
})
app.put('/api/users/:id', (req,res) =>{
    const {name,email,password} = req.body;
    const query = "UPDATE `users` SET `name`=?, `email`=?, `password`=? WHERE `id`=?"
    conn.query(query,[name,email,password,req.params.id],(err,result)=>{
        if(err){
            console.log('Error',err)
            res.status(404).json({status:false,msg:'Error '+err});
        }
        if(result.affectedRows ==0){
            res.status(404).json({status:false,msg:'User Not Found'});
        }else{
            res.status(200).json({status:true,msg:'Updated User'});

        }
        
    });
})
// Delete a user
app.delete('/users/:id', (req, res) => {
    const query = 'DELETE FROM users WHERE id = ?';
    
    db.query(query, [req.params.id], (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json({ message: 'User deleted' });
    });
  });
app.listen(4500);