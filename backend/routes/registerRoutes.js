const express = require('express')
const router = express.Router();
const { registerPerson } = require('../controller/registerController')

router.post('/', registerPerson)
module.exports = router