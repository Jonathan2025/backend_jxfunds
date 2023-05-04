import Comment from "../models/commentsModel"


const createComment = async (req, res) => {

    const id = req.params.id // id is coming from the route id
    const {comment, username} = req.body 

    try{
        if(id){
            const createComment = await Comment.create({
                fundId: id, // the fundID will be the id from the params
                comment, 
                username: username ? username: 'admin'
            })
            res.status(201).json(createComment)
        } else {
            res.status(404).json({message:'Comment with this fund ID not found'})
        }
    } catch (error){
        res.status(404).json({message:error})
    }
}


// this will export our routes/controllers
module.exports = {
    createComment
}