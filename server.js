var express = require('express');
// var path = require('path');
// var favicon = require('serve-favicon');
// var logger = require('morgan');
// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');
//
// var routes = require('./routes/index');
// var users = require('./routes/users');
// var players = require('./routes/players');

var app = express();

app.get('/', function(req, res){
  res.send('Go Feral!');
});

app.listen(3000);