const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI; 
const client = new MongoClient(uri);
const dbName = 'dinespotdb';
const collectionName = 'restaurents'; 

async function getRestaurants() {
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const restaurants = await collection.find({}).toArray();

    console.log('✅ Connected to MongoDB');
    console.log('📦 Fetched Restaurants:', restaurants.length);

    return restaurants;
  } catch (err) {
    console.error('❌ DB Error:', err);
    return [];
  }
}

module.exports = { getRestaurants };