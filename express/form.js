const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const port = Number(process.argv[2]);
const file = path.join(__dirname, 'public');
const views = path.join(__dirname, 'views');
const app = express();

app.set('views', views);
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({extended : false}));

app.post('/form', (req, res) => {
  res.write(req.body.str.split('').reverse().join(''));
  res.end();
});

app.get('/home', (reg, res) => {
  res.render('home');
})

app.listen(port);
