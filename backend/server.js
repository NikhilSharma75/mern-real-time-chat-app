import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"
import authRoutes from "./routes/auth.routes.js"
import { app , server } from "./socket/socket.js";
import connectToMongoDB from "./db/connectToMongoDB.js";




dotenv.config();
const PORT = process.env.PORT || 5000 ;
app.use(express.json()); // to parse the incoming requests  with json payloads (from req.body)
app.use(cookieParser());
//app.get("/",(req,res) => {
    // root route http://localhost:5000/
  //  res.send("Hello World !!!");
//});
app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)
server.listen(PORT,() =>{
    connectToMongoDB();
    console.log(`Server running at the port ${PORT}`)});