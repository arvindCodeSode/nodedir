module.exports = requestFilter=(req,resp,next)=>{

    if( !req.query.age )
    {
        resp.send("Please provide age");
    }else{
        if( req.query.age<20 )
        {
            resp.send("User must be 10 year old");
        }else{
            next();
        }
    }

}