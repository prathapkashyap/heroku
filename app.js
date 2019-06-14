const express=require('express');
const mongoose=require('mongoose');
const body=require('body-parser');
const http = require('http');
const port = process.env.PORT || 3000
var app=express();
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello World</h1>');
  });
app.set('view engine','ejs');
app.use(body.json());
app.use(body.urlencoded({extended:false}));
app.use('/api/',require('./routes/index'));
app.listen(port,() => {
    console.log(`Server running at port `+port);
  });