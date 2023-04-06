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