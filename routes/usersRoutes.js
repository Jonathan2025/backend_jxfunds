const router = require('express').Router();
const {fundCtrl} = require('../controllers')
const {usersCtrl} = require('../controllers')


//ROUTES - METHODS For Users
router.get('/', usersCtrl.getUser)
router.post('/signup',usersCtrl.createUser)
router.post('/signin',usersCtrl.signInUser)
 
module.exports = router;