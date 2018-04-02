let http = require('http');
let fs = require('fs');

let readStream = fs.createReadStream(__dirname + '/readMe.txt');
// let readStream = fs.createReadStream(__dirname + '/readMe.txt', {encoding: 'utf8'});

readStream.on('data', function (chunk) {
    console.log(chunk);
});