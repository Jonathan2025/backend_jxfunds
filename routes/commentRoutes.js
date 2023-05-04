const router = require('express').Router()
import { createComment } from '../controllers/commentCtrls';

router.post('/createComment', createComment)
 
module.exports = router;