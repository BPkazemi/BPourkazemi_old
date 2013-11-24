require('newrelic');
var express = require('express'),
	path = require('path');

var server = module.exports = express();

server.set('port',  process.env.PORT || 3000);
server.set('view engine', 'html');

// Serve static content
server.use(express.logger('dev'));
server.use(express.static(path.join(__dirname + '/public')));

server.listen(server.get('port'), function() {
	console.log('Express listening on port ' + server.get('port'));
});
