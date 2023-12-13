const express = require('express');
const cors=require('cors')
const publicRoutes=require('./routes/public')
const adminRoutes=require('./routes/admin')
const databaseRoutes=require('./routes/data')
const isValid=require('./routes/isValid')
const signUp=require('./routes/signup')
const login=require('./routes/login')
const mypost=require('./routes/mypost');
const deletePost=require('./routes/delete')
const app=express();
app.use(cors())
app.use(express.json())
app.use('/p',publicRoutes)
app.use('/a',adminRoutes)
app.use('/login',login)
app.use('/signup',signUp)
app.use('/isvalid',isValid)
app.use('/post',databaseRoutes)
app.use('/mypost',mypost);
app.use('/delete',deletePost)
app.get("/",(req,resp)=>{
    console.log("get Application is called")
    resp.json({app:"true"})
})
app.listen(3300,()=>{
    console.log("server started")
})