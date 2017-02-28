const express = require('express');
const path = require('path');

const port = process.argv[2];
const file = process.argv[3] || path.join(__dirname, 'public');
const app = express();

app.use(express.static(file));

app.listen(port);
