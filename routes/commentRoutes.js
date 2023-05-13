const router = require('express').Router();
const {commentCtrl} = require('../controllers');

//ROUTES - for comments
router.post('/:id', commentCtrl.createComment)
router.put('/:id/updateComment', commentCtrl.updateComment)
router.delete('/:id/deleteComment', commentCtrl.deleteComment)

module.exports = router