import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path"
import cors from "cors";
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"
import authRoutes from "./routes/auth.routes.js"
import { app , server } from "./socket/socket.js";
import connectToMongoDB from "./db/connectToMongoDB.js";


dotenv.config();

const __dirname = path.resolve();


const PORT = process.env.PORT || 5000 ;
const FRONTEND_URL = process.env.FRONTEND_URL;
app.use(cors({
    origin: "FRONTEND_URL" , // replace with your frontend URL
    credentials: true,
})); 
app.use(express.json()); // to parse the incoming requests  with json payloads (from req.body)

app.use(cookieParser());
//app.get("/",(req,res) => {
    // root route http://localhost:5000/
  //  res.send("Hello World !!!");
//});
app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)

app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});
server.listen(PORT,() =>{
    connectToMongoDB();
    console.log(`Server running at the port ${PORT}`)});