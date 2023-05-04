// Here will be the model for the comments
const mongoose = require("mongoose") //require mongoose

const CommentSchema = new mongoose.Schema({
    fundId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Fund',
        required: true, 
    },
    username: {
        type: String,
        required: true, 
    }, 
    comment:{
        type: String, 
        required: true,
    }, 
    replies:[{
        username: {
            type:String, 
            required:true,
        }, 
        commentId:{
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
        reply:{
            type: mongoose.Schema.Types.ObjectId,
            required: true
        }, 
        createdAt:{
            type: Date, 
            default: new Date().getTime()
        }
    }]
}, {
    timestamps: true
})


// now we need to create a model from our schema 
const Comment = mongoose.model("Comment", CommentSchema)

module.exports = Comment