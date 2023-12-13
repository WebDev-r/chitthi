const express=require('express');
const deletepost=express();
const deletePost=require('../controler/delete')
deletepost.post('/',deletePost);
module.exports=deletepost;