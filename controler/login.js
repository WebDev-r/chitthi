const database = require('../routes/data');
const MongoClient=require('mongodb').MongoClient
const url = 'mongodb+srv://js8322870:nkRS1cjqniQgzv9w@cluster0.35d7raj.mongodb.net/';
const client = new MongoClient(url);
async function login(req,resp){
    const u_id=req.body.u_id;
    const pass=req.body.pass;
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db('reactApp');
    let collection=db.collection('userDetails')
    const userDetails=await collection.findOne({u_id:u_id})
    if(userDetails!=null){
        if(userDetails.pass==pass){
            resp.json({login:true})
        }
        else{
            
            resp.json({login:false,status:"wrong password"})
        }
    }
    else{
        resp.json({login: false,status:"not found"});
    }
}
module.exports=login;