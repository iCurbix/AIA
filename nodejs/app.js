// var createError = require('http-errors');
const express = require('express');
const session = require('express-session')
const path = require('path');
// var cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');

const router = require('./routes/routes');

const app = express();


app.use(logger('dev'));

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(session({
    secret: 'very_strong_secret',
    resave: false,
    saveUninitialized: true
}));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
})

app.use('/', router);

app.listen(3500, () => {
    console.log('Server running at http://localhost:3500')
})
