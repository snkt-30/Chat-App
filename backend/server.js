const express = require("express");
const connectDB = require("./config/db");
const colors = require("colors");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const messageRoutes = require("./routes/messageRoutes");
const mongoose = require("mongoose");
const path = require('path');


dotenv.config();

const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const chatRoutes = require("./routes/chatRoutes");
const app = express();

connectDB();
app.use(express.json());
const port = process.env.PORT || 5000;

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);

// -----------------------------  Depoloyment -------------------
const __dirname1 = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1,"/frontend/build")))


  app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname1,"frontend","build","index.html"));
  })
} 
else {
  app.get("/", (req,res)=>{
    res.send("Api is Running successfully");
  })
}

// -----------------------------  Depoloyment -------------------
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log("server is running".yellow.bold, port);
});
