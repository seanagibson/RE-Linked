var express = require('express');
var bodyParser = require('body-parser');
// var requestHandler = require('./request-handler.js');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '../../client'));


module.exports = app;
