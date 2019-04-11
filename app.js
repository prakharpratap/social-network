const express=require('express');
const mongoose =require('mongoose');
const http=require('http');
const bodyParser=require('body-parser');
const port=3000;
const app=express();
 app.use(express.static(__dirname + '/website_front_end'));
const url ='mongodb://localhost:27017/galon';
app.use(bodyParser.json());
const connect =mongoose.connect(url);
connect.then(function(){
    console.log('connected to the mongodb server successfully');
});

app.use('/login',function(req,res,next){
    res.sendFile(__dirname+'/website_front_end/index.html');
});
app.use('/signup',function(req,res,next){
    res.sendFile(__dirname+'/website_front_end/signup.html');
});







const server=http.createServer(app);
server.listen(port,'localhost',function(){
    console.log(`the server is connected at http://localhost:${port}/`);
});