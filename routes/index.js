const router = require('express').Router()
const fundRoute = require("./fundRoutes")

router.use('/fund', fundRoute)


module.exports = router; 