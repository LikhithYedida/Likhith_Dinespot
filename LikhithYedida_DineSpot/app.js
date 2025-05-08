const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 6150;

app.use(cors()); 
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('Dine Spot Backend Running...');
});

app.get('/restaurants', (req, res) => {
  fs.readFile(path.join(__dirname, 'public/data.json'), 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading data');
    }
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
