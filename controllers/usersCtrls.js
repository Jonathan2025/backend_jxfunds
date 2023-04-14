// we're pulling in the models data that we have
const db = require('../models')
const bcrypt = require('bcrypt')
const { User } = require('../models')
console.log(db)


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
const createUser = async (req, res) => {
    const { username, password } = req.body

    try {
        const user = await User.signup(username, password)

        res.status(200).json({ username, user })

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


module.exports = {
    getUser,
    createUser
}
