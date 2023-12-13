const express=require('express');
const validUserName=require('../controler/validUserName')
const validPass=require('../controler/validPass')
const isValid=express();
isValid.post('/u_id',validUserName)
isValid.post('/pass',validPass)
module.exports=isValid;