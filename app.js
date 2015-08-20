var
    express = require('express')
  , http = require('http')
  ;

var
    middleware = require('./middleware')
  ;



module.exports = function (config) {
	var app = express();
	app.use('/', middleware(config));
	app.listen(config.site.port, function() {
	  console.log("Mongo Express server listening on port " + (config.site.port || 80));
	});
};
