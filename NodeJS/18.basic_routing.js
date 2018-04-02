let http = require('http');
let fs = require('fs');

let server = http.createServer(function (request, response) {
    if (request.url === '/home' || request.url === '/') {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/index.html').pipe(response);
    }
    else if (request.url === '/contact') {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/contact.html').pipe(response);
    }
    else if (request.url === '/api') {
        let obj = [{ classifier: 'SVM', optimizer: 'SGD' }];
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify(obj));
    }
    else {
        response.writeHead(404, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/404.html').pipe(response);
    }
});

server.listen(8000, '127.0.0.1');
console.log("listening to port 8000 on 127.0.0.1");