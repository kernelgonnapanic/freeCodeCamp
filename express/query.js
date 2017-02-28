const express = require('express');
const fs = require('fs');

const port = process.argv[2];
const file = process.argv[3];
const app = express();
let json;

app.get('/books', (req, res) => {
  fs.readFile(file, (err, data) => {
    if (err) return res.sendStatus(500);
    try {
      json = JSON.parse(data)
    } catch (e) {
      res.sendStatus(500);
    }
    res.json(json);
  })
});

app.listen(port);
