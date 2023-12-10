const express =require('express');
const adminRouts=express();
adminRouts.get('/',(req,resp)=>{
    resp.json({routes:"admin"});
})
module.exports=adminRouts;