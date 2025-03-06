const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 5000;


app.get('/',(req,res)=>{
  res.send("Server Hello!", PORT)
});

app.get("/api",(req,res)=>{
  res.send("hello i am server!");
})

app.listen(PORT,()=>console.log('hello server!!'));