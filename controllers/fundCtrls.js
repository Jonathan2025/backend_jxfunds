// we're pulling in the models data that we have
const db = require('../models')

// Using the Virtual in the fund.js model we can populate the fund data to also include the comments
const Comment = require('../models/comment')

// get route for the funds and then we also want use the mongoose populate method to populate with the comments
const getFund = (req, res) => {
    db.Fund.find({})
      .populate([
        {
          path: "comments",
          match: {
            check: true,
            parent: null
          },
          populate: [
            {
              path: "replies",
              match: {
                check: true
              }
            }
          ]
        }
      ])
      .then((foundFund) => {
        if (!foundFund) {
          res.status(404).json({ message: "Cannot find the Funds" })
        } else {
          res.status(200).json({ data: foundFund })
        }
      })
  }
// show route for the SPECIFIC fund
const showFund = (req,res) =>{
    // we will also populate with the comment virtual property to get the comments for this particular fund
    db.Fund.findById(req.params.id)
    .populate([
        {
            path: "comments",
            match: {
                check:true,
                parent: null
            },
            // now before we wouldnt be able to see the replies to the comment so we need to add a populate property
            populate: [
                {
                    path:"replies",
                    match:{
                        check:true
                    }
                }
            ]
        }
    ])
    .then((foundFund)=>{
        if(!foundFund){
            res.status(404).json({message: 'cannot find the Fund'})
        } else {
            res.status(200).json({data: foundFund})
        }
    })
}

// This will let us create a new fund
const createFund = (req,res) =>{
    db.Fund.create(req.body)
    .then((createdFund)=>{
        if(!createdFund){
            res.status(400).json({message:'cannot create Fund'})
        } else {
            res.status(201).json({data: createdFund, message:'Fund created'})
        }
    })
}

// This will let us update a fund
const updateFund = (req, res) =>{
    db.Fund.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((updatedFund) => {
        if(!updatedFund){
            res.status(400).json({Message: 'Could not update Fund'})
        } else {
            res.status(200).json({Data: updatedFund, Message: "Fund updated"})
        }
    })
}

// this will let us delete the fund
const deleteFund = (req,res) => {
    db.Fund.findByIdAndDelete(req.params.id)
    .then((deletedFund) => {
        if(!deletedFund){
            res.status(400).json({Message: 'Could not delete Fund'})
        } else {
            res.status(200).json({Data: deletedFund, Message: "Fund deleted"})
        }
    })
}

// this will export our routes/controllers
module.exports = {
    getFund,
    createFund,
    updateFund,
    deleteFund,
    showFund
}