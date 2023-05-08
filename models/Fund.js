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
    },
    // currently if we were to check the route in postman, we wouldnt see any comments in the data
    // So we need to set the virtuals to true so we can see the comments
    toJSON:{virtuals:true}
})

// we need to have a relationship with the comment schema, so we use what is called a Mongoose Virtual Property
FundSchema.virtual('comments', {
    ref: "Comment", // the comment model 
    localField: "_id", //  the mongo DB creates an id for each entry on mongo db
    foreignField: "fundId" // needs to match the id of the particular fund
})

// now we need to create a model from our schema 
const Fund = mongoose.model("Fund", FundSchema)

module.exports = Fund