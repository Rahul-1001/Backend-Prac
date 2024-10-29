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



// const express=require("express")

// const app=express();



//app.use route will match all the api call 
// app.use('/home',(req,res)=>{
// res.send("server is running from home page")
// })


// app.use('/test',(req,res)=>{
//     res.send("server is running from test page")
//     })

//this will only handle get call
// app.get("/test",(req,res)=>{
//     res.send({
//         firstName:"Rahul",
//         lastName:"Gupta"
//     })
// })


// app.post("/data",(req,res)=>{
//     res.send(
//     //     {
//     //     firstName,
//     //     lastName
//     // }
//     res.send("response send succesfi")
// )
// })



//dynamic route
// app.post("/datas/:userId/:userName/:userPassword",(req,res)=>{
//     // console.log(req.query );
//    console.log(req.params);

//     res.send("posting the data in database")
// })



// app.delete("/delete",(req,res)=>{
//     res.send("deleted the data successfully")
// })




// app.listen(7000,()=>{
//     console.log("server is running on port 7000");
    
// })






// *********************************************************************//

// more than 1 route handler 




// app.get('/home',(req,res,next)=>{
//     //  res.send("sending the response from home server")
//     //if we will call the next function then it will call next route function
//     //  next();
// },
// (req,res)=>{
//   res.send("2nd response from home server");
// }
// );

// app.post('/post',(req,res)=>{
//     res.send("post request")
// })


// middleware 


// const express=require("express");

// const app= express();
//as we know that admin can perform more than various function

//we have to do it again and again authorized 
// app.use("/admin",)
// app.get("/admin/getAlluser",(req,res)=>{
//     //check if the request is send by admin or not basically authorized
//     res.send("get all user")
// })

// app.get("/admin/deleteuser",(req,res)=>{
//      //check if the request is send by admin or not basically authorized
//     res.send("delete all the user");
// })



// app.listen(7777,()=>{
//     console.log("server is listening on port 7777");
    
// })













//url=mongodb+srv://rahul1234:student123456@cluster0.1emlt.mongodb.net/


// const express=require("express");
// const connectDB=require("./config/database")
// const app=express()
// const User=require("./models/user")
// import authmiddleware from "./middleware/auth";
// const authmiddleware =require('./middleware/auth')
// app.get("/admin", (req, res) => {  
//     res.send("Hello World");
// });

// app.get("/admin/getuser",authmiddleware,(req,res)=>{
//     res.send("getting all the data")
// })

// app.get("/admin/deleteuser",authmiddleware,(req,res)=>{
//     res.send("deleting the user")
// })



//api creation for signup 
//  app.post("/signup",async (req,res)=>{
    //  const userObj={
    //     firstName:"rahul",
    //     lastName:"gupta",
    //     emailId:"rahul@123.com", 
    //     password:"rahul123"
    //  }
     //creating a new instance for the user model
// const user=new User(userObj)
//this function will return a promise 
// await user.save();

// const user=new User({
//     firstname:"mohan",
//     lastname:"gupta",
//     email:"mohan@123.com",
//     password:"mohan",
//     age:"eighteen"
// })
// await user.save();
// res.send("user added successfully")

// })
//helloworld is a data base user is a collection 


// connectDB()
// .then(()=>{
//     console.log("database connection successfully...")
//     app.listen(7777,()=>{
//         console.log("server is running on port 7777");
        
//     }) 
// }).catch((err)=>{
//   console.log(err);
  
// });






// **************************************************************************

const express=require("express");


const connectDB=require("./config/database")
 

const app=express();

app.use(express.json());


const Login=require("./models/login")


app.post("/signup",async (req,res)=>{
//     const objectid={
//         firstName:"ram aam kahat hai",
//         lastName:"gupta",
//         email:"ram123@gmail.com",
//         password:"ram12345"
//     }

//     const data=new Login(objectid);
//   await  data.save();
//   res.send("user data inserted successfuly")

const data=new Login(req.body);
await  data.save(); 
res.send("user data inserted successfuly")
//  console.log(req.body); 

})
 
//getting the one user from databse by email

app.get("/user",async(req,res)=>{
    const emailId=req.body.email;
    try{
      const users= await Login.find({email:emailId});
      if(users.length===0)
      {
        res.status(404).send("user not found")
      }
      else{
        res.send(users);
      }
    }
    catch(err){
         console.log("something went wrong")
    }
  
})

//feed api get all the user from the database
app.get("/feed",async(req,res)=>{

try{
      const users=await Login.find({})
      res.send(users);
}
catch(err){
        console.log("something went wrong")
   }

})

//delete a user from the daabase
app.delete("/user",async (req,res)=>{
    const userId=req.body.userId;
    try{
        //  const user=await Login.findByIdAndDelete({_id:userId})
            const user= await Login.findByIdAndDelete(userId);
            res.send("user deleted successfully")
    }catch(err)
    {
       res.status(400).send("something went wrong")
    }
})


//update a user from the database
app.patch("/user",async (req,res)=>{
     const userId=req.body.userId;
     const data=req.body;
     try {
           const user= await Login.findByIdAndUpdate({_id:userId},data)
            res.send("user updated successfully")
     } catch (error) {
        res.send("something went wrong")  
     }
})


app.listen(7777, ()=>{
    connectDB()
    .then(()=>{
        console.log("mongodb database connection successful")
        console.log("server is running on port 7777");
    })
    .catch((err)=>{ 
   console.log(err)  
    })
    
    
})


































//this data cannot be harcoded we need a user to fill a html form and send the 
//data in api and we get this data and push it into a database 

 