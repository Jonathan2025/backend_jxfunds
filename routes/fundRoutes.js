const router = require('express').Router();
const {fundCtrl} = require('../controllers')

//ROUTES - METHODS
router.get('/', fundCtrl.getFund)
router.post('/',fundCtrl.createFund) 
router.put('/:id', fundCtrl.updateFund)
router.delete('/:id', fundCtrl.deleteFund)

module.exports = router;