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

var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.listen(port, function() {
	console.log('Server Started');
	console.log('listening on port ' + port);
});