const router = require('express').Router()
const fundRoute = require("./fundRoutes")

router.use('/jxfunds', fundRoute)



module.exports = router; 