const express = require("express");
const app = express();

app.get("/", (req, response)=>{
    response.send("We are live");
})

app.get("/shit", (req, res)=>{
    res.json({
        "name" : "ankit chauhan",
        "package" : "25lpa"
    })
})

app.listen(3000, ()=>{
    console.log("port 80");
})