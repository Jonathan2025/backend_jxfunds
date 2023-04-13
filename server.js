// set up the dependencies. Add in the port, express, routes and listener
require("dotenv").config()


// Pull the PORT from .env 
const {PORT} = process.env

// get PORT from .env 
const express = require("express")

// create an application object 
const app = express()

// import cors 
const cors = require('cors')

//import bcrypt
const bcrypt = require('bcrypt')




// Middleware
app.use(cors()) // this will prevent the cors errors and allow us to open access to all origins. An origin can be anything like localhost, heroku, etc
app.use(express.urlencoded({extended:true})) // allow us to get req.body
app.use(express.json()) // parse json

// ROUTES
// 2) Create a test route 
app.get("/", (req,res) => {
    res.send("Hello World, this is a test route for the index index funds app")
})

// Now import the availiable routes in routes/index.js
const routes = require('./routes/index.js')
app.use('/', routes)

// 4) catch route if it doesnt match to anything we will sent this response 
app.use((req, res) => {res.status(404).json({message: "Not a proper route- 404 Error"})})

// LISTENER
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}` ))

