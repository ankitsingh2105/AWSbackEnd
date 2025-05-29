const express = require("express");
const app = express();

app.get("/", (req, response)=>{
    response.send("We are live");
})

app.listen(80, ()=>{
    console.log("port 80");
})