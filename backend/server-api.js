// backend/serve-api.js
const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 6150;
const publicDir = path.join(__dirname, "public");

const server = http.createServer((req, res) => {
  if (req.url === "/api") {
    fs.readFile(path.join(__dirname, "data.json"), "utf8", (err, data) => {
      if (err) {
        res.writeHead(500);
        return res.end("Internal Server Error");
      }
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(data);
    });
  } else {
    let filePath = path.join(publicDir, req.url === "/" ? "index.html" : req.url);
    let extname = String(path.extname(filePath)).toLowerCase();
    let contentType = "text/html";

    const mimeTypes = {
      ".html": "text/html",
      ".js": "application/javascript",
      ".css": "text/css",
      ".json": "application/json",
      ".jpg": "image/jpeg",
      ".jpeg": "image/jpeg",
      ".png": "image/png",
    };

    contentType = mimeTypes[extname] || "application/octet-stream";

    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(404);
        res.end("Not Found");
      } else {
        res.writeHead(200, { "Content-Type": contentType });
        res.end(content);
      }
    });
  }
});

server.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});