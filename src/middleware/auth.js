function authmiddleware(req,res,next)
{
    if(req.query.auth==="true")
    {
        console.log("User is authenticated");
        next();
    }
    else{
        console.log("user is not authenticated");
        res.status(401).send("unauthorized access")
    }
}
module.exports=authmiddleware;