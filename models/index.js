require('dotenv').config()
// setting up the database model, require mongoose
const mongoose = require("mongoose")
const {MONGODB_URI} = process.env


// Establish Database connection, not much will change from unit 2 
mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })


// Connection Events
mongoose.connection
    .on("open", () => console.log("Your are connected to mongoose"))
    .on("close", () => console.log("Your are disconnected from mongoose"))
    .on("error", (error) => console.log(error))

// export the models 
module.exports={
    Fund: require("./Fund.js"),
    Comment: require("./comment.js")
}
