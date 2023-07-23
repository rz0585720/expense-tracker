const express = require('express')
const router = express.Router()
const home = require('./modules/home')
const records = require('./modules/records')
const users = require('./modules/users')
const { authenticator } = require('../middleware/auth')

router.use('/users', authenticator, users)
router.use('/records', authenticator, records)
router.use('/', home)

module.exports = router