require('dotenv').config();
const express=require('express');
const app=express();
const cors = require("cors");

app.use(cors());

const facts=[
  { "id": 1, "fact": "The sun is a star." },
  { "id": 2, "fact": "Water boils at 100B0C." },
  { "id": 3, "fact": "Earth has one moon." }
]

app.get('/api/facts',(req,res)=>{
    res.json(facts);
});

app.use((req,res)=>{
  res.send(`<h2 style='color:red;text-align:center';>Page not found</h2>`);
});

const PORT = process.env.PORT||5000;
console.log(PORT);
app.listen(PORT,(req,res)=>{
    console.log('Server started at http://localhost:5000🚀');
});