const fs = require('fs');
const path = require('path');

function getRestaurants() {
  const filePath = path.join(__dirname, 'public', 'data.json');
  const jsonData = fs.readFileSync(filePath);
  return JSON.parse(jsonData);
}

module.exports = { getRestaurants };
