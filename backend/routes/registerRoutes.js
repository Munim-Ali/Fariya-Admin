const express = require('express')
const router = express.Router();
const { registerPerson, loginPerson, getPerson, deletePerson } = require('../controller/registerController')
const {protect} = require('../middleware/authMiddleware')

router.post('/', registerPerson)
router.post('/login', loginPerson)
router.get('/person', protect, getPerson)
router.route('/:id').delete(deletePerson)


module.exports = router