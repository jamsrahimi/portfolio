let http = require('http');
let fs = require('fs');

let server = http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    let obj = {
        name: 'eric',
        age: '20',
        school: 'stanford'
    };
    response.end(JSON.stringify(obj));
});

server.listen(8000, '127.0.0.1');
console.log("listening to port 8000 on 127.0.0.1");