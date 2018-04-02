let express = require('express');
let app = express();

app.get('/', function (request, response) {
    response.send('home page');
    // response.sendFile(__dirname + '/index.html');
});

app.get('/contact', function (request, response) {
    response.send('contact page');
    // response.sendFile(__dirname + '/contact.html');
});

// route params
app.get('/profile/:id', function (request, response) {
    response.send(request.params.id);
});

app.listen(8000);