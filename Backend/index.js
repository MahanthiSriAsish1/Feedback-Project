require('dotenv').config()
const express = require("express");
const cors = require("cors")
// const bodyParser = require('body-parser');



const app =express();
app.use(cors());
app.use(express.json());
const port = process.env.port;

app.get("/",(req,res)=>{
    res.send();
})


app.post("/userReg",(req,res)=>{
    console.log(req.body);
})


app.listen(port, ()=>{
    console.log("listening to port number 5000");
})