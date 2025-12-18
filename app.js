const express = require('express');
const adminRouter = require("./router/admin.js");
const mongoose = require("mongoose")

const app = express();

app.use("/", adminRouter)

mongoose.connection.on("connected", () => console.log("MongoDB connected"));
mongoose.connection.on("error", err => console.error("MongoDB error:", err));
mongoose.connection.on("disconnected", () => console.warn("MongoDB disconnected"));
mongoose.connect("mongodb://localhost:27017/Learning_App")


app.listen(1000,()=>{
    console.log("Server is Running:http://localhost:1000/hello")
});
