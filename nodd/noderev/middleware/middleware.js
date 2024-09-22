module.exports  = (req,res,next)=>{
    if(!req.query.age){
        res.send('Please Provide Name');
    }else{
        next();
    }
} 