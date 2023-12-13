const express=require('express')
const  mypost=express();
const myPost=require('../controler/mypost')
mypost.post('/',myPost);
module.exports=myPost;