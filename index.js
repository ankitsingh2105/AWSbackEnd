const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors({
    origin: "http://localhost:5173", // adjust to actual frontend URL
}));

app.get("/", (req, res) => {
    res.send("We are not live");
});

app.get("/shit", (req, res) => {
    res.json({
        name: "ankit chauhan",
        package: "25lpa"
    });
});

app.listen(80, () => {
    console.log("Server is running on port 80");
});
