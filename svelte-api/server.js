const express = require('express')
const app = express()

const cors = require('cors')  
app.use(cors('http://localhost:8080'))

app.listen(3000, () => {
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
