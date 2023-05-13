const router = require('express').Router()
const fundRoute = require("./fundRoutes")
const commentRoute = require("./commentRoutes")

router.use('/jxfunds', fundRoute)
router.use('/jxfunds', commentRoute)

module.exports = router; 