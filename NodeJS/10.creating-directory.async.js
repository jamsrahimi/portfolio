fs.mkdir('stuff', function () {
    // callback function
    fs.readFile('testRead.txt', 'utf8', function (error, data) {
        fs.writeFile('./stuff/testWrite.txt', data);
    });
});