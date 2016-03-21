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
var PORT = 3000;
var middleware = require('./middleware.js');

app.use(middleware.logger);

app.get('/', function(req, res){
  res.send('Go Feral!');
});

app.get('/account', middleware.requireAuthentication, function(req, res){
  res.send('Welcome!');
});

app.listen(PORT, function(){
  console.log('listening on port ' + PORT );
});
