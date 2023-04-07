const router = require('express').Router();
const {fundCtrl} = require('../controllers')

//ROUTES - METHODS
router.get('/', fundCtrl.getFund)


module.exports = router;