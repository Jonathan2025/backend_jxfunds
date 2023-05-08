const Fund = require("../models/Fund")
const Comment = require("../models/comment")



const createComment = async(req,res, next) => {
    
    try {
        const {desc, parent, replyOnUser} = req.body
        const fundId = req.params.id
        console.log(fundId)

        const fund = Fund.findById(req.params.id) 

        // we want to check that the fund could be found, if not return the error
        if(!fund){
            const error = new Error("The Fund could not be found")
            return next(error)
        }

        const newComment = new Comment({
            // user: req.user._id right now we just want to test with a sample user then we can add user model,
            user: "user1",
            desc,
            fundId: fundId,
            parent, 
            replyOnUser
        })

        const savedComment = await newComment.save()
        return res.json(savedComment)


    } catch (error){
        next(error)
    }
}

module.exports ={
    createComment
}