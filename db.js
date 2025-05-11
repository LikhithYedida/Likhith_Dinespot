const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://dinespotuser:Dinespot%40123@dinespot.hgmcybo.mongodb.net/?retryWrites=true&w=majority&appName=dinespot';

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function getRestaurants() {
  try {
    // Connect to the database
    await client.connect();
    const db = client.db('dinespotdb');
    const collection = db.collection('restaurents');

    const restaurants = await collection.find().toArray();
    return restaurants;
  } catch (error) {
    console.error('MongoDB Fetch Error:', error);
    return [];
  } finally {
    await client.close();
  }
}

module.exports = { getRestaurants };
