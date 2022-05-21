const { MongoClient, Collection } = require('mongodb');
const dotenv = require('dotenv');

dotenv.config();

const dbUrl = process.env.DB_SERVER;
const dbName = "test";
const collectionName = "todotasks";

const dbclient = new MongoClient(dbUrl);

async function dbConnect(){
    let result = await dbclient.connect();
    db = result.db(dbName);
    return db.collection(collectionName);
}

module.exports=dbConnect;