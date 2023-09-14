const express = require('express')
const router = express.Router()
const contactController = require('../controllers/contactUs')
router.get('/contactUs',contactController.getContactUs)

 router.post('/contactUs',contactController.postContactUs)

router.get('/success',contactController.getSuccess)
module.exports = router;