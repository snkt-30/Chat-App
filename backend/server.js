const express = require("express");
const connectDB = require("./config/db");
const colors=require("colors")
const dotenv = require("dotenv").config();
const userRoutes=require("./routes/userRoutes");
const {notFound,errorHandler}=require("./middleware/errorMiddleware")
const chatRoutes=require("./routes/chatRoutes");
const app = express();


connectDB();
 app.use(express.json());
const port= process.env.PORT || 5000;

// app.get('/',(req,res)=>{
//     res.send("Api i sRunning");
// })

app.use("/api/user",userRoutes);
app.use("/api/chat",chatRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port,()=>{
    console.log("server is running".yellow.bold,port);
});