require('dotenv').config();
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
app.get('/', (req, res) => {
  res.send("Hello World!");
});

app.get('/twitter',(req,res)=>{
    res.send('Twitter');
})

app.get('/login',(req,res)=>{
    res.send('<h1>Login Successfully</h1>');
})

app.get('/chai',(req,res)=>{
    res.send('<h3>Chai is ready</h3>');
})
app.get('/github',(req,res)=>{
    res.send('<a href="https://github.com/yashgosavi-02">go to github</a>');
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);           
});
