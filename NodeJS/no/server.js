var http = require('http');

http.createServer(function (request, response) {
    // response head

    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.writeHead(200, { 'Content-Type': 'text/plain' });

    response.end('Hello World\n');
});

http.listen(8888);

console.log('Server running at http://127.0.0.1:8888');