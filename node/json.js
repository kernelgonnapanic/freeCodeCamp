const http = require('http');
const url = require('url');

const port = process.argv[2];

const parseTime = (date) => {
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  console.log('parse');
  return { hour, minute, second };
}

const unixtime = (date) => {
  const unixtime = date.getTime();
  console.log('unixtime');
  return { unixtime };
}

const getResponse = (response, result) => {
  response.writeHead(200, {'content-type': 'application/json'});
  return response.end(JSON.stringify(result));
}

const server = http.createServer((request, response) => {
  const path = url.parse(request.url, true);
  const time = new Date(path.query.iso);
  switch(path.pathname) {
    case '/api/parsetime': {
      console.log('boo');
      return getResponse(response,  parseTime(time));
    }
    case '/api/unixtime': {
      console.log('boo2');
      return getResponse(response,  unixtime(time));
    }
    default:
      response.writeHead(404);
      return response.end();
    }
});
server.listen(port);
