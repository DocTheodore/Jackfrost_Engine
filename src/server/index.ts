import express from "express";

const app = express();
let port = 3000;

app.get("/", (req,res) => {
    res.send("Hello World");
    console.log("Response sent");
});

app.listen(port, () => {
    console.log("App listening on port: ", port);
});

