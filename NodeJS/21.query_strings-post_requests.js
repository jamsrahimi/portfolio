let fs = require('fs');
let express = require('express');
let app = express();
let bodyParser = require('body-parser');

let urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine', 'ejs');

app.use('/assets', express.static('assets'));

app.get(['/', '/home'], function (request, response) {
    response.render('index.ejs');
    // response.sendFile(__dirname + '/index.html');
});

app.get('/contact', function (request, response) {
    response.render('contact.ejs', { qs: request.query });
});

app.post('/contact', urlencodedParser, function (request, response) {
    // console.log(request.body);
    response.render('contact-success', { data: request.body });
})

app.get('/nodejs', function (request, response) {
    let path = __dirname + '/nodejs.html';
    response.sendFile(path);
});

app.get('/profile/:id', function (request, response) {
    let data = { age: 20, country: 'India', favs: ['aa', 'bb', 'cc'] };
    response.render('profile.ejs', { id: request.params.id, data: data });
    // response.send(request.params.id);
});

app.get('*', function (request, response) {
    response.render('404.ejs');
    // response.status(404).sendFile(__dirname + '/404.html');
});

app.listen(8000);