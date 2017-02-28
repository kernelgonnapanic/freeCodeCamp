const http = require('http');
const fs = require('fs');
const map = require('through2-map');

const port = process.argv[2];

const server = http.createServer((request, response) => {
  if(request.method !== 'POST') return res.end('Error');
  response.writeHead(200, {'content-type': 'text-plain'});
  request
  .pipe(map(chunk => chunk.toString().toUpperCase()))
  .pipe(response);
});
server.listen(port);
