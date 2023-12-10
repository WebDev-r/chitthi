const express = require('express');
const cors=require('cors')
const publicRoutes=require('./routes/public')
const adminRoutes=require('./routes/admin')
const databaseRoutes=require('./routes/data')
const app=express();
app.use(cors());
app.use(express.json())
app.use('/p',publicRoutes)
app.use('/a',adminRoutes)
app.use('/post',databaseRoutes)
app.get("/",(req,resp)=>{
    console.log("get Application is called")
    resp.json({app:"true"})
})
app.listen(3300,()=>{
    console.log("server started")
})