// we're pulling in the models data that we have
const db = require('../models')
console.log(db)



// this route will get the Fund that we want to see
const getFund = (req,res) =>{
    res.send('This is getFund.')
}

// This will let us create a new fund
const createFund = (req,res) =>{
    res.send('this is createFund')
}

// This will let us update a fund
const updateFund = (req, res) =>{
    res.send('this is updateFund')
}

// this will let us delete the fund
const deleteFund = (req,res) => {
    res.send('this is deleteFund')
}

// this will export our routes/controllers
module.exports = {
    getFund,
    createFund,
    updateFund,
    deleteFund
}