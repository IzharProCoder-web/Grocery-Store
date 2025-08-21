import express from "express";
import "dotenv/config";
import connectDB from "./configs/db.js";


const app = express()

const PORT = process.env.PORT; 

app.get('/',(req,res) => {
    res.send('Api IS Working ')
})

app.listen(PORT, () => {
    connectDB()
    console.log(`the server is runing on port ${PORT}`)
})