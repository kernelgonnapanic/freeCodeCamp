const crypto = require('crypto');
const express = require('express');

const port = process.argv[2];
const app = express();

app.put('/message/:id', (req, res) => {
  const hash = crypto
    .createHash('sha1')
    .update(new Date().toDateString() + req.params.id)
    .digest('hex');
  res.end(hash);
});

app.listen(port);
