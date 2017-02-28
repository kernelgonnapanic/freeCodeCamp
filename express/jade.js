const express = require('express');
const path = require('path');

const port = process.argv[2];
const views = path.join(__dirname, 'public');
const app = express();

app.set('views', views);
app.set('view engine', 'jade');

app.get('/home', (req, res) => {
  res.render('index', {date: new Date().toDateString()});
  res.end();
});

app.listen(port);
