// const express=require('express');

// const app=express()


// app.use("/test",(req,res)=>{
//     res.send("hello from the test  server");
// })

// app.use("/help",(req,res)=>{
//     res.send("sending response from help functional")
// })

// app.listen(3000,()=>{
//     console.log("server is successfully listening on port 3000");
    
// });



const express=require("express")

const app=express();



//app.use route will match all the api call 
// app.use('/home',(req,res)=>{
// res.send("server is running from home page")
// })


// app.use('/test',(req,res)=>{
//     res.send("server is running from test page")
//     })

//this will only handle get call
app.get("/test",(req,res)=>{
    res.send({
        firstName:"Rahul",
        lastName:"Gupta"
    })
})


app.post("/data",(req,res)=>{
    res.send(
    //     {
    //     firstName,
    //     lastName
    // }
    res.send("response send succesfi")
)
})



app.post("/datas",(req,res)=>{
    res.send("posting the data in database")
})


app.delete("/delete",(req,res)=>{
    res.send("deleted the data successfully")
})




app.listen(7000,()=>{
    console.log("server is running on port 7000");
    
})