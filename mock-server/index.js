let express = require('express');

let app = express();

app.get('/mock/401', (req, res) => {
    res.status('401').json({
        error: 'Not authorized',
        msg: 'Your are not allowed to go there'
    })
});

app.get('/mock/403', (req, res) => {
    res.status('403').json({
        error: 'Access denied',
        msg: 'Your session has expired'
    })
});

app.get('/mock/500', (req, res) => {
    res.status('500').json({
        error: 'Server nuke explosion',
        msg: 'Please, go panic and run to next nuclear shelter'
    })
});

app.get('/mock/200', (req, res) => {
    res.status('200').json({
        error: 'OK',
        msg: 'Everything is OK'
    });
});

app.listen(3000, () => {
    console.log('Listening in http://localhost:3000');
});