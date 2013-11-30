
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');

global.app = express();

// App config
app.config = require('./config/config');
// all environments
app.set('port', app.config.node.port || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.json());
app.use(express.urlencoded());

app.use(express.cookieParser('shhhh, very secret'));//before line
app.use(express.session());//after line - must
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);


// other statics
app.use(express.static(path.join(__dirname, 'public')));

// App routes
require('./lib/app/model-loader');
require('./lib/app/controller-loader');
require('./routes/routes');

// development only
app.use(express.logger('dev'));
if ('development' == app.get('env')) {
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
}

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});