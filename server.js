const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send("Hi From Version 1")
})

app.listen(4000,()=>{
    console.log("Server is listening on port 4000");
})