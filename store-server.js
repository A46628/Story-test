const express = require("express")
const app = express()
const port = 3000
const storyMen = require('./store-men')
const storyServices = require('./store-services.js')(storyMen)
const storeWebApiRouter = require('./store-web-api.js')(express.Router(), storyServices)



app.use(express.json())

app.use('/', storeWebApiRouter)
app.get("/", function(req,res){
    res.send("hello world")
})

app.listen(port,function(){
    console.log(`This application is running in port number ${port}`)
})
