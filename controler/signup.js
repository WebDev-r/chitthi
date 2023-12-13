const database = require('../routes/data');
const MongoClient=require('mongodb').MongoClient
const url = 'mongodb+srv://js8322870:nkRS1cjqniQgzv9w@cluster0.35d7raj.mongodb.net/';
const client = new MongoClient(url);
async function signup(req,resp){
    const name=req.body.name;
    const u_id=req.body.u_id;
    const pass=req.body.pass;
    const Email=req.body.pass;
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db('reactApp');
    let collection=db.collection('userDetails')
    if(await collection.findOne({u_id:u_id})==null){
    resp.json(await collection.insertOne({u_id:u_id,pass:pass,name:name,post_id:[]}))
    }
    else{
        resp.json({acknowledged: false});
    }
}
module.exports=signup