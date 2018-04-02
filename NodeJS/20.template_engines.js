let express = require('express');
let app = express();

app.set('view engine', 'ejs');

app.get('/profile/:id', function (request, response) {
    let data = { age: 20, country: 'India' };
    response.render('profile', { id: request.params.id, data: data });
    // response.send(request.params.id);
});

app.listen(8000);