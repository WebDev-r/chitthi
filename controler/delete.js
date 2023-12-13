const database = require('../routes/data');
const MongoClient=require('mongodb').MongoClient
const url = 'mongodb+srv://js8322870:nkRS1cjqniQgzv9w@cluster0.35d7raj.mongodb.net/';
const client = new MongoClient(url);
async function Delete(req,resp){
    const u_id=req.body.u_id;
    const pass=req.body.pass;
    const post_id=req.body.post_id;
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db('reactApp');
    let userDetailsCollection=db.collection('userDetails');
    let trendingCollection=db.collection('trending');
    const userDetails=await userDetailsCollection.findOne({u_id:u_id})
    if(userDetails!=null){
        if(userDetails.pass==pass){
           resp.json({deleted:true} )
        }
        else{
            
            resp.json({login:false,status:"wrong password"})
        }
    }
    else{
        resp.json({login: false,status:"not found"});
    }
}
module.exports=Delete;