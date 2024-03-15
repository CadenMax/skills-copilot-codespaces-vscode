// create web server
// 1. create server object
// 2. create request event
// 3. create response event
// 4. listen to the port

const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer(function(req, res) {
  const q = url.parse(req.url, true);
  let filename = './' + q.pathname;
  if (q.pathname === '/') {
    filename = './index.html';
  }
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end('404 Not Found');
    }  
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);