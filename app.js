const express = require('express');
const adminRouter = require("./router/admin.js")

const app = express();

app.use("/", adminRouter)

app.listen(1000,()=>{
    console.log("Server is Running:http://localhost:1000/hello")
});
