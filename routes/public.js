const express=require('express');
const public =express();
public.get("/",(req,resp)=>{
    resp.json({routes:"public"});
})
module.exports=public