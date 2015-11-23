//include express to our project
var express = require('express');

// cresate our application with express
var app = express();


var port = 3000;

var router = express.Router();

router.get('/', function(req, res){
	res.json({
		'message':'THIS IS MY FIRST ENDPOINT- RUNNING'
	});
})


app.use('/api', router);

app.listen(port);

console.log('App initialized');

