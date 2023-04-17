const express = require("express")
const app = express()
const port = 3000

app.get("/", function(req,res){
    res.send("hello world")
})

app.listen(port,function(){
    console.log(`This application is running in port number ${port}`)
})
