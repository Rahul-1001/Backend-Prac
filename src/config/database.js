const mongoose=require("mongoose")
const connectDB=async()=>{
 await mongoose.connect(
      "mongodb+srv://rahul1234:student123456@cluster0.1emlt.mongodb.net/Helloworld"
 );

};

module.exports=connectDB;


