const { ObjectId } = require('mongodb');
const database = require('../routes/data');

const MongoClient=require('mongodb').MongoClient
const url = 'mongodb+srv://js8322870:nkRS1cjqniQgzv9w@cluster0.35d7raj.mongodb.net/';
const client = new MongoClient(url);
const db= 'jiten';
async function getMyPost(req,resp) {
    const u_id=req.body.u_id;
    const pass=req.body.pass;
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db('reactApp');
    let trenndingCollection=db.collection('trending')
    let userDetailsCollection=db.collection('userDetails')
    console.log("database connected")
    const userDetails=await userDetailsCollection.findOne({u_id:u_id});
    console.log(userDetails)
    if(userDetails!=null && userDetails.pass==pass){
        const post=userDetails.post;
        let mypost=[]
        for(let i=0;i<post.length;i++){
            let document=await trenndingCollection.findOne({_id:post[i]})
            mypost.push(document)
        }
        console.log(mypost.length);
        resp.json({mypost})
        
    }
   else{
        resp.json({login:false})
   }
   
  }
module.exports=getMyPost;
  
