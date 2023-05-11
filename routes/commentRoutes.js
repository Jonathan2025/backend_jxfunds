const router = require('express').Router();
const {commentCtrl} = require('../controllers');



//ROUTES - for comments
router.post('/:id', commentCtrl.createComment)
router.put('/:id/updateComment', commentCtrl.updateComment)
// router.get('/:id', commentCtrl.getComments)



 
module.exports = router;