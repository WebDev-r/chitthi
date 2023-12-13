const database = require('../routes/data');
const MongoClient=require('mongodb').MongoClient
const url = 'mongodb+srv://js8322870:nkRS1cjqniQgzv9w@cluster0.35d7raj.mongodb.net/';
const client = new MongoClient(url);
async function validPass(req,resp){
    const pass=req.body.pass;
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db('reactApp');
    let collection=db.collection('userDetails')
    resp.json({u_id:await collection.findOne({pass:pass})==null})
}
module.exports=validPass