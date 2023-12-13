const express=require('express');
const logIn=require('../controler/login')
const login=express()
login.post('/',logIn)
module.exports=login;