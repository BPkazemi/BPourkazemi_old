var express = require('express');

var app = express();

app.use(express.logger('dev'));

app.get('/', function(req, res) {
	res.send('Successful default route');
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
	console.log('Listening on port ' + port);
});