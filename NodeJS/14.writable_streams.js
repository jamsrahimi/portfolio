let http = require('http');
let fs = require('fs');

let readStream = fs.createReadStream(__dirname + '/readMe.txt');
let writeStream = fs.createWriteStream(__dirname + '/writeMe.txt');

readStream.on('data', function (chunk) {
    console.log(chunk);
    writeStream.write(chunk);
});