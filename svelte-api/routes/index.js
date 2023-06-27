const router = require('express').Router()
const { route } = require('./auth')
const user =  require('./user')

/**
 * @swagger
 * tags:
 *  name: User
 *  description: 유저 정보
 */
router.use("/user", user)

module.exports = router