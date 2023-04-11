// we're pulling in the models data that we have
const db = require('../models')
console.log(db)


const getUser = (req,res) =>{
    // res.send('This is getFund.')
    db.User.find({}) 
    .then((foundUser)=>{
        if(!foundUser){
            res.status(404).json({message: 'cannot find the User'})
        } else {
            res.status(200).json({data: foundUser})
        }
    })
}

// This will let us create a new fund
const createUser = (req,res) =>{
    // res.send('this is createFund')
    db.User.create(req.body)
    .then((createdUser)=>{
        if(!createdUser){
            res.status(400).json({message:'cannot create User'})
        } else {
            res.status(201).json({data: createdUser, message:'User created'})
        }
    })
}
// users.get('/new', (req, res) => {
//   res.render('users/new.ejs')
// })

// users.post('/', (req, res) => {
//   //overwrite the user password with the hashed password, then pass that in to our database
//   req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
//   User.create(req.body, (err, createdUser) => {
//     console.log('user is created', createdUser)
//     res.redirect('/')
//   })
// })

module.exports = {
    getUser,
    createUser
}
