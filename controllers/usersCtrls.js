// we're pulling in the models data that we have
const db = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { User } = require('../models')
console.log(db)

// now that we've required jsonwebtoken we will need a function to create the token, passing in the _id of the user as an arguement
const createToken = (_id) => {
    // below we are using the object ID, and the SECRET to create the token
    // then we set it to expire in 1 day
    return jwt.sign({_id},process.env.SECRET, {expiresIn: '1d'})
}

const getUser = (req, res) => {
    // res.send('This is getFund.')
    db.User.find({})
        .then((foundUser) => {
            if (!foundUser) {
                res.status(404).json({ message: 'cannot find the User' })
            } else {
                res.status(200).json({ data: foundUser })
            }
        })
}

const signInUser = async (req, res) =>{
    res.json({msg:'sign in user'})
}

// this is how a user can sign up
const createUser = async (req, res) => {
    const { username, password } = req.body

    try {
        const user = await User.signup(username, password)

        // we will create a token after they're saved in the database
        const token = createToken(user._id)

        res.status(200).json({ username, token })
        
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


module.exports = {
    getUser,
    createUser
}

// Historic code for reference
// This will let us create a new User
// const createUser = (req,res) =>{
//     // res.send('this is createFund')
//     db.User.create(req.body)
//     .then((createdUser)=>{
//         if(!createdUser){
//             res.status(400).json({message:'cannot create User'})
//         } else {
//             res.status(201).json({data: createdUser, message:'User created'})
//         }
//     })
// }