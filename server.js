// set up the dependencies. Add in the port, express, routes and listener
require("dotend").config()

// Pull the PORT from .env 
const {PORT} = process.env

// get PORT from .env 
const express = require("express")

// create an application object 
const app = express()

// import cors 
const cors = require('cors')



// Middleware
app.use(cors()) // this will prevent the cors errors and allow us to open access to all origins. An origin can be anything like localhost, heroku, etc
app.use(express.urlencoded({extended:true})) // allow us to get req.body
app.use(express.json()) // parse json



