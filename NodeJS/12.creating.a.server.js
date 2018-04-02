let http = require('http');

let server = http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello, World!');
    console.log(request);
    console.log(response);
});

server.listen(8000, '127.0.0.1');
console.log("listening to port 8000 on 127.0.0.1");