var express = require('express');

var app = express();

var middleware = {
	authentication: function(req, res, next){
		console.log('Route hit');
		next();
	},
	logger: function(req, res, next){
		console.log(req.method + ' ' + new Date().toString());
		next();
	}
};

app.use(middleware.logger);

app.get('/', function(req, res){
	res.send('Hey dude');
});

var port = 3000;

app.use(express.static(__dirname + '/public'));

app.listen(port, function() {
	console.log('Server Started');
	console.log('listening on port ' + port);
});