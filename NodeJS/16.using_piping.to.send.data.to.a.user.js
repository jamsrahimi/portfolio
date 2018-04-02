let http = require('http');
let fs = require('fs');

let server = http.createServer(function (request, response) {
    // response object is a writable stream
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    let readStream = fs.createReadStream(__dirname + '/readMe.txt');
    readStream.pipe(response);
});

server.listen(8000, '127.0.0.1');
console.log("listening to port 8000 on 127.0.0.1");