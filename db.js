const { MongoClient } = require('mongodb');
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);
const dbName = 'dinespotdb';

async function getRestaurants() {
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection= db.collection('restaurants')
    const restaurants = await collection.find({}).toArray();
    return restaurants;
  } catch (err) {
    console.error('DB Error:', err);
    return [];
  }
}

module.exports = { getRestaurants };
