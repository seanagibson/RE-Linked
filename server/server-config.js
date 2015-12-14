var express = require('express');
// var requestHandler = require('./request-handler.js');

var app = express();

app.use(express.static(__dirname + '../../client'));


module.exports = app;
