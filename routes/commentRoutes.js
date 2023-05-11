const router = require('express').Router();
const {commentCtrl} = require('../controllers');



//ROUTES - for comments
router.post('/:id', commentCtrl.createComment)
// router.put('/:id/:commentId', commentCtrl.updateComment)
router.get('/:id/comments', commentCtrl.getComments)



 
module.exports = router;