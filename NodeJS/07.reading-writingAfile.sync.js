let fs = require('fs');

// readFileSync is a synchronous method 
let testRead = fs.readFileSync('testRead.txt', 'utf8');
console.log(testRead);

fs.writeFileSync('testWrite.txt', testRead);