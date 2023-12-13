const database = require('../routes/data');

const MongoClient=require('mongodb').MongoClient
const url = 'mongodb+srv://js8322870:nkRS1cjqniQgzv9w@cluster0.35d7raj.mongodb.net/';
const client = new MongoClient(url);
const db= 'jiten';
async function mongoDB(req,resp) {
    const post=req.body.post;
    const u_id=req.body.u_id;
    const pass=req.body.pass;
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db('reactApp');
    let trendingCollection=db.collection('trending');
    let userDetailsCollection=db.collection('userDetails')
    console.log("database connected")
    const userDetails=await userDetailsCollection.findOne({u_id:u_id,pass:pass});
    if(userDetails!=null){
    const insertStatus=await trendingCollection.insertOne({name:userDetails.name,u_id:userDetails.u_id,post:post,like:0,comment:[""]})
    if(insertStatus.acknowledged){
      const insertedId=insertStatus.insertedId;
      await userDetailsCollection.updateOne({u_id:u_id},{$push:{post:{$each:[insertedId],$position:0}}})
      resp.json({acknowledged:true});
    }
    else{
      resp.json({acknowledged:false})
    }
  }
  else{
    resp.json({acknowledged:false,status:"can not login"})
  }
  }
module.exports=mongoDB;
  

