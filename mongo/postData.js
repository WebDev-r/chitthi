const database = require('../routes/data');

const MongoClient=require('mongodb').MongoClient
const url = 'mongodb+srv://js8322870:nkRS1cjqniQgzv9w@cluster0.35d7raj.mongodb.net/';
const client = new MongoClient(url);
const db= 'jiten';
async function mongoDB(req,resp) {
    const post=req.body.post;
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db('jiten');
    let collection=db.collection('trending')
    console.log("database connected")
    resp.json(await collection.insertOne({post:post,like:0,comment:[""]}));
  }
module.exports=mongoDB;
  

