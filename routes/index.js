const router = require('express').Router()
const fundRoute = require("./fundRoutes")
const commentRoute = require("./commentRoutes")
// const userRoute = require('./usersRoutes')


router.use('/jxfunds', fundRoute)
router.use('/jxfunds', commentRoute)
// router.use('/users', userRoute)

// http://localhost:3000/jxfunds/64319d25da9b83a6b7b48a47 this is the route we get when we access a show page


module.exports = router; 