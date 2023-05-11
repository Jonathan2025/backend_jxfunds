const Fund = require("../models/Fund")
const Comment = require("../models/comment")

// get route for ALL the comments for the SPECIFIC fund
const getComments = async (req, res) => {
    try {
      const fundId = req.params.id
      const comments = await Comment.find({ fundId: fundId })
        .populate({
          path: 'replies',
          match: { check: true },
        })
        .exec()
  
      if (!comments) {
        return res.status(404).json({ message: 'Comments not found' })
      }
  
      return res.status(200).json({ data: comments })
    } catch (error) {
      return res.status(500).json({ message: error.message })
    }
  }


// createComment will be the function that handles creating comments
const createComment = async(req,res, next) => {
    try {
        const {user, desc, parent, replyOnUser} = req.body
        const fundId = req.params.id
        const fund = Fund.findById(req.params.id) 

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
// const updateComment = async (req, res, next) => {
//     try {
//     // the id in req.body will be the comment ID
//       const { id, user, desc, parent, replyOnUser } = req.body
      
//       const commentId = id // this will be the req.body.id which gets the id from the comments 
//       const fundId = req.params.id
        
//       const updatedComment = await Comment.findByIdAndUpdate(commentId,
//         { user, desc, fundId, parent, replyOnUser },
//         { new: true }
//       )
  
//       if (!updatedComment) {
//         const error = new Error('The comment could not be found')
//         return next(error)
//       }
  
//       res.json(updatedComment)
//     } catch (error) {
//       next(error)
//     }
//   }




module.exports ={
    getComments,
    createComment,
    // updateComment,
    
}