const router = require('express').Router();
const {commentCtrl} = require('../controllers')


//ROUTES - for comments
router.post('/:id', commentCtrl.createComment)

 
module.exports = router;