// we're pulling in the models data that we have
const db = require('../models')
console.log(db)



// this route will get the Fund that we want to see
const getFund = (req,res) =>{
    res.send('This is getFund.')
}

// this will export our routes/controllers
module.exports = {
    getFund
}