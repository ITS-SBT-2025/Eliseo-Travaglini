console.log("Hello, World!");
// This is a simple Node.js script that prints "Hello, World!" to the console.

const http = require('http');
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello, World!\n');
    res.end();
    }).listen(8080);