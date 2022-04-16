#!/usr/bin/env node
const server = require("./app") // load up the web server
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const port = 3000 // the port to listen to for incoming requests
// set up connection to MongoDB using Mongoose
dotenv.config()
const db_uri = process.env.MONGODB_URI
//connect to database using mongoose and include callback function to indicate success
mongoose.connect(db_uri, {useNewUrlParser: true}, function(err){
    if(err){
        console.log('Could not connect to database')
        console.log(err)
    } else {
        console.log('Connected to database yay!')
    }
})
// call express's listen function to start listening to the port
const listener = server.listen(port, function () {
  console.log(`Server running on port: ${port}`)
})
// a function to stop listening to the port
const close = () => {
  listener.close()
}
module.exports = {
  close: close,
}