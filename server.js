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
var _ = require('underscore');

var app = express();
var PORT = 3000;
var middleware = require('./middleware.js');
var users = require('./routes/users.js');
var index = require('./routes/index.js');

app.use(middleware.logger);
// app.use('/users');

app.get('/', function(req, res){
  res.send('Go Feral!');
});

app.get('/profile', middleware.requireAuthentication, function(req, res){
  res.send('Welcome!');
});

app.listen(PORT, function(){
  console.log('listening on port ' + PORT );
});
