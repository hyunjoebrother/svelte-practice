const express = require('express')
const app = express()


app.use(express.json())

var cookies = require('cookie-parser');
app.use(cookies())

const {config} = require('dotenv')
config()

const { isAuthenticated } = require('./utils/jwt')

const cors = require('cors')  
app.use(cors('http://localhost:8080'))


const port = process.env.PORT;

app.listen(port, () => {
    console.log("\r\ntry http://localhost:3000 on your browser");
});

app.get("/", (req, res) => {
  // 브라우저에서 받은 데이터는 req.body에 저장
  res.send("<h1>성공</h1>")
})

app.get("/member", (req, res) => {
  const data = {
    name: 'mei',
    email: 'mei@svt17.com',
  };
  res.json(data);
})


// JWT Login

const authRouter = require('./routes/auth')
app.use('/auth', authRouter);

app.get('/restricted', isAuthenticated, (reqm, res) => {
  res.status(200).send({message: 'This is Restricted Zone'})
})

app.all('*', (req, res) => [
  res.status(400).send({message: 'Invalid Route'})
])