const express=require('express');
const app=express();
app.get('/test',(req,res)=>{
    res.end("ini get XI RPL");
});
app.post('/test',(req,res)=>{
    res.end("ini get XI RPL");
});
app.listen('8080',(e)=>{
    console.log(e);
});