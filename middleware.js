module.exports = function(){
var middleware = {
  requireAuthentication: function (req, res, next) {
      console.log('private route hit!');
      next();
    },
    logger: function (req, res, next){
      console.log('Request: ' + newDate(.toString() + '' + req.method + '' + req.originalUrl);
    )
    }
  }
}