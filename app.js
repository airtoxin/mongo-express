#!/usr/bin/env node

var
    express = require('express')
  , http = require('http')
  , config = require('config')
  ;

var
    middleware = require('./middleware')
  ;

var app = express();
app.use('/', middleware(config));
app.listen(config.site.port, function() {
  console.log("Mongo Express server listening on port " + (config.site.port || 80));
});
