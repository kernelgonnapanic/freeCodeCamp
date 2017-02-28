const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const stylus = require('stylus');

const port = Number(process.argv[2]);
const file = path.join(__dirname, 'public');
const app = express();

app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({extended : false}));

app.use(stylus.middleware(file));
app.use(express.static(file));

app.get('/home', (req, res) => {
  res.render('index');
});

app.listen(port);
