const { ObjectId } = require('mongodb');
const database = require('../routes/data');

const MongoClient=require('mongodb').MongoClient
const url = 'mongodb+srv://js8322870:nkRS1cjqniQgzv9w@cluster0.35d7raj.mongodb.net/';
const client = new MongoClient(url);
const db= 'jiten';
async function mongoDB(req,resp) {
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db('reactApp');
    let collection=db.collection('trending')
    console.log("database connected")
    resp.json(await collection.find().sort({_id:-1}).toArray());
  }
module.exports=mongoDB;
  
