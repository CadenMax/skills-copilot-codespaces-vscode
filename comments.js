//Create web server
//Load modules
var http = require('http');
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');

var comments = [];

//Create server
http.createServer(function (req, res) {
    var url_parts = url.parse(req.url);
    if (url_parts.pathname == '/comment') {
        var comment_data = '';
        req.on('data', function (data) {
            comment_data += data;
        });
        req.on('end', function () {
            var params = querystring.parse(comment_data);
            comments.push(params);
            res.end();
        });
    } else if (url_parts.pathname == '/get_comments') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(comments));
    } else {
        fs.readFile('./index.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    }
}).listen(8080, 'localhost');