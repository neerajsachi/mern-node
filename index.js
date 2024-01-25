const http = require("http");
const dotenv=require("dotenv");
const express = require("express");
const mongoose = require("mongoose")
const mongodb = require("mongodb")

const taskControllers = require("./controller/taskController");

dotenv.config();

const app=express();
app.use(express.json());
app.post("/tasks", taskControllers.createTask);
app.get("/:id", (req,res) => {
    res.status(200).json({
        message: "Hello",
        id:req.params.id
    });
})
app.patch("/tasks/:id",taskControllers.updateTask);
app.delete("/tasks/:id",taskControllers.deleteTask);

;

mongoose.connect("mongodb+srv://Neeraj_Sachi:reju2002@cluster0.ubnue66.mongodb.net/?retryWrites=true&w=majority").then(() => {
    console.log("db connected")
}).catch((err) => {
    console.log(err);
});

app.listen(process.env.PORT, () => {
    console.log("Server running on ", process.env.PORT);
})
/*const server = http.createServer((req,res) => {
    res.writeHead(200,{"Content-Type": "text/plain"});
    res.end("Hello world");
});

server.listen(process.env.PORT, () => {
    console.log("Server is running on ", process.env.PORT);
});*/