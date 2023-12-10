const express=require('express')
const postData=require('../mongo/postData')
const getPost=require('../mongo/getData')
const database=express();
database.post("/",postData);
database.get("/",getPost);
module.exports=database;