const mongoose = require("mongoose")

// Comment schema
const CommentSchema = new mongoose.Schema({
    //user: {type:mongoose.Schema.Types.ObjectId, ref: "User", required: true},
    user: {type: String, ref: "User", required: true},
    desc: {type: String, required:true},
    fundId: {type: mongoose.Schema.Types.ObjectId, ref:"Fund", required: true}, 
    check: {type: Boolean, default:true},
    parent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
        default: null, 
    },
    replyOnUser: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User",
        default: null
    }
}, 
{
    timestamps: true, toJSON: { virtuals: true }
})

// getting the reply comments of the main comment 
CommentSchema.virtual('replies', {
    ref: "Comment", // the fund model 
    localField: "_id", //  the mongo DB creates an id for each entry on mongo db
    foreignField: "parent" // needs to match the parent of the replies
})

// now we need to create a model from our schema 
const Comment = mongoose.model("Comment", CommentSchema)

module.exports = Comment