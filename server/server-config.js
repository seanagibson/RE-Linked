var express = require('express');
var bodyParser = require('body-parser');
var handler = require('./request-handler.js');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '../../client'));
app.use(express.static(__dirname + '../../lib'));
app.use(express.static(__dirname + '../../public'));

app.post('/login', handler.login);

app.post('/signup', handler.signup);

app.get('/profile', handler.getProfile);
app.post('/profile', handler.setProfile);

app.get('/users', handler.getUsers);

module.exports = app;
