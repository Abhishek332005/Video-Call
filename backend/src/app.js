import express from "express";
import { createServer } from "node:http";
import {Server} from "socket.io";

import mongoose from "mongoose";
import { connectToSocket } from "./controllers/socketMannger.js";

import cors from "cors";
import userRoutes from "./controllers/routes/user.routes.js"
const app = express();
const server = createServer(app);
const io =  connectToSocket(server);

app.set("port", (process.env.PORT || 8000))

app.use(cors());
app.use(express.json({limit:"40kb"}));
app.use(express.urlencoded({limit:"40kb",extended:true}));

 app.use("/api/v1/users" , userRoutes);

const start =  async () => {
    app.set("mongo_user")
const connectionDB = await mongoose.connect("mongodb+srv://ytabhishek721:abhi0654@cluster0.l8qnz.mongodb.net/")

console.log(`MONGO Connected DB Host : ${connectionDB.connection.host}`)
    server.listen(app.get("port"), () =>{
        console.log("LISTEN ON PORT 8000")
    })
}

start();

