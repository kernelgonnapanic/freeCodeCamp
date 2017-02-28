const net = require('net');

const port = process.argv[2];

const server = net.createServer(socket => {
  const date = new Date();
  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1));
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const string = `${year}-${month}-${day} ${hours}:${minutes}`;
  socket.write(string);
  socket.end('\n');
});
server.listen(port);
