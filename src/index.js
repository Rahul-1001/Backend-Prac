const express=require('express');

const app=express()


app.use("/test",(req,res)=>{
    res.send("hello from the test  server");
})

app.use("/help",(req,res)=>{
    res.send("sending response from help functional")
})

app.listen(3000,()=>{
    console.log("server is successfully listening on port 3000");
    
});

