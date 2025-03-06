const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 5000;


app.get('/',(req,res)=>{
  res.send("Server Hello!", PORT)
});

app.listen(PORT);