// now we will create a funds model 
const mongoose = require("mongoose")

// this is the schema and the attributes we want to show on the page 
const FundSchema = new mongoose.Schema({
    name: String,
    company: String,
    symbol: String,
    description: String,
    recommendation: String,
    date: Date,
    timezone: String,
    price: Number,
    dividends: Number
}, {
    timestamps:
    {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})


// we need to have a relationship with the comment schema, so we use what is called a Mongoose Virtual
FundSchema.virtual('comments', {
    ref: "Comment", // the comment model 
    localField: "_id", //  the mongo DB creates an id for each entry on mongo db
    foreignField: "fundId" // needs to match the fund Id
})

// now we need to create a model from our schema 
const Fund = mongoose.model("Fund", FundSchema)

module.exports = Fund