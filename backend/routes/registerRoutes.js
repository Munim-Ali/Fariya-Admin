const express = require('express')
const router = express.Router();
const { registerPerson, loginPerson, getMe } = require('../controller/registerController')

router.post('/', registerPerson)
router.post('/login', loginPerson)
router.get('/me', getMe)
module.exports = router