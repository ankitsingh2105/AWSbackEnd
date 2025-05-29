const express = require("express");
const app = express();

app.get("/", (req, response)=>{
    response.send("We are live");
})

app.get("/shit", (req, res)=>{
    res.send("welcome to aws bruh!!");
})

app.listen(3000, ()=>{
    console.log("port 80");
})