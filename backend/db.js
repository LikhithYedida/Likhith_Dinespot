const fs = require('fs');
const path = require('path');

function getRestaurants() {
  try {
    const dataPath = './data.json';
    console.log('Reading file from:', dataPath); 
    const data = fs.readFileSync(dataPath, 'utf8');
    console.log('Raw JSON:', data); 
    const restaurants = JSON.parse(data);
    console.log('Parsed restaurants:', restaurants); 
    return restaurants;
  } catch (err) {
    console.error('Failed to read data.json:', err);
    return [];
  }
}

module.exports = { getRestaurants };