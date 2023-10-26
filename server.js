import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
import user from "./route/user.js"

const app = express();

dotenv.config()
app.use(express.json())

const connect = async () => {

        await mongoose.connect(process.env.MONGO)
        .then(() =>{
            console.log("DataBase connected")
        })
        .catch(()=> {
            console.log("Database Error")
        })
    
}

app.use('/api/user/', user);

app.listen(8000, ()=>{
    connect();
    console.log("Backend server start")
})

