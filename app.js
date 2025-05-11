const express = require('express');
const cors = require('cors');
const path = require('path');
const { getRestaurants } = require('./db'); 

const app = express();
const PORT = process.env.PORT || 6150;

app.use(cors({ origin: '*' }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api', async (req, res) => {
  try {
    const restaurants = await getRestaurants();
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(restaurants);
  } catch (err) {
    console.error('Error retrieving data:', err);
    res.status(500).json({ error: 'Failed to fetch restaurant data' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server live at http://localhost:${PORT}`);
});
