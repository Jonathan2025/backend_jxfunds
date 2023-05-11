const Fund = require("../models/Fund")
const Comment = require("../models/comment")

// createComment will be the function that handles creating comments
const createComment = async(req,res, next) => {
    try {
        const {user, desc, parent, replyOnUser} = req.body
        const fund = Fund.findById(req.params.id) // when we are finding the id, we are finding the id in the FUND model

        // we want to check that the fund could be found, if not return the error
        if(!fund){
            const error = new Error("The Fund could not be found")
            // the next keyword is used to move on to the next middleware function in the chain
            return next(error)
        }

        const newComment = new Comment({
            // user will be linked to the user that logged into the app
            user,
            desc,
            fundId: req.params.id,
            parent, 
            replyOnUser
        })

        const savedComment = await newComment.save()
       
        return res.json(savedComment)
    } catch (error){
        next(error)
    }
}


// updateComment will be the function that is run when the put route(edit comment) is hit 
const updateComment = async (req, res, next) => {
    console.log("you have gone before the updated comment")
    try {
        // req.body.id will be the id of the comment because 
        const updatedComment = await Comment.findByIdAndUpdate(req.body.id,
            req.body,
            { new: true }
        )
    
        if (!updatedComment) {
            const error = new Error('The comment could not be found')
            return next(error)
        }
    
        res.json(updatedComment)

    } catch (error) {
      next(error)
    }
}






module.exports ={
    createComment,
    updateComment,
}