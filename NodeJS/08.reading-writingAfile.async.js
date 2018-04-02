
//https://github.com/jprichardson/node-fs-extra#sync-vs-async-vs-asyncawait
let fs = require('fs');

// readFile is an asynchronous method
fs.readFile('02.cat.js', 'utf8', function (error, data) {
    console.log(data);
    fs.writeFile('testWrite.txt', data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
});
console.log("test");

// output ->
// test
// This is a test file.

// deleting a file
fs.unlink('./testWrite.txt', (err) => {
    if (err) throw err;
    console.log('testWrite.txt was deleted');
});
let testRead = fs.readFileSync('testWrite.txt', 'utf8');
console.log(testRead);
console.log("End!");
