const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 6150;

const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png'
};

const server = http.createServer((req, res) => {
  if (req.url === '/api') {
    const dataPath = path.join(__dirname, 'data.json');
    fs.readFile(dataPath, (err, content) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      if (err) {
        res.writeHead(500);
        res.end('Failed to load data');
      } else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(content);
      }
    });
  } else {
    const filePath = req.url === '/' 
      ? path.join(__dirname, 'public', 'index.html')
      : path.join(__dirname, 'public', req.url);
    const ext = path.extname(filePath);
    const contentType = mimeTypes[ext] || 'application/octet-stream';

    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(404);
        res.end('File Not Found');
      } else {
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content);
      }
    });
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});