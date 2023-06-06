const express = require('express');
const app = express()
app.use(express.json())

const authRouter = express.Router();
const {config} = require('dotenv')
config()

const {
    generateAccessToken, isAuthenticated, generateRefreshToken, refreshToken, logout
} = require('../utils/jwt')


// 로그인 End Point
authRouter.post('/login', (req, res) => {
    const {email, password} = req.body;

    // 임의의 사용자 정보 -> Token 생성
    if(email === 'user1@email.com' && password === 'user1password') {
        generateRefreshToken(res, {email})

        const token = generateAccessToken({email})
        const message = {status: 'SUCCESS', token}

        return res.status(201).send(message)
    }

    res.status(401).send({status: 'ERROR', message: 'Invalid email or pwd'})
})

authRouter.post('/refresh', (req, res) => {
    const token = refreshToken(req, res)
    res.send({status: 'SUCCESS', token})
})

authRouter.post('/logout', isAuthenticated, (req, res) => {
    logout(req, res)
})

module.exports = authRouter