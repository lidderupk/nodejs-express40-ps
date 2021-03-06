/* jshint node: true */
/* global require */
'use strict';

var express = require('express');
var app = express();
var port = process.env.PORT || 5000;

app.use(express.static('public'));
app.use(express.static('src/views'));

app.get('/', function (req, res) {
    res.send('hello world \n');
});

app.get('/books', function (req, res) {
    res.send('hello books \n');
});

app.listen(port, function (err) {
    console.log('running server on port ' + port);
});