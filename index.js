console.log('backend seekhenge');
require('dotenv').config();
const express=require('express');
const app=express();
const port=3200

app.get('/',(req,res)=>{
    res.send('hello world');
})


app.get('/twitter',(req,res)=>{
    res.send('hitesh.com');
})

app.get('/login',(req,res)=>{
    res.send('<h1>please login here</h1>');
})

app.listen(process.env.PORT,()=>{
    console.log('exmaple app listening on port');
    console.log(process.env.PORT);
})