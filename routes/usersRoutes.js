const router = require('express').Router();
const {fundCtrl} = require('../controllers')
const {usersCtrl} = require('../controllers')


//ROUTES - METHODS For Users
router.get('/', usersCtrl.getUser)
router.post('/',usersCtrl.createUser)
 
module.exports = router;