const express=require('express');
const signUp=require('../controler/signup')
const signup=express()
signup.post('/',signUp)
module.exports=signup;