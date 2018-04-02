// fs.rmdir('stuff')
// Error: ENOTEMPTY: directory not empty, rmdir 'stuff'

fs.unlink('./stuff/testWrite.txt', function () {
    fs.rmdir('stuff');
});