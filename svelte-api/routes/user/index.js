const userRouter = require('express').Router()

/**
 * @swagger
 * /user:
 *   get:
 *     summary: 모든 유저 정보
 *     tags: [User]
 *     responses:
 *       200:
 *         description: Successful response
 */

userRouter.get("/user", (req, res) => {
    // Your code to retrieve all user data from the server
  });
  
  module.exports = userRouter;