//include express to our project
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser')

var Place = require('./models/place');

//connecting to database
mongoose.connect('mongodb://localhost:27017/nodetest');

// cresate our application with express
var app = express();

app.use(bodyParser.urlencoded({extended: true}));

var port = 3000;

var router = express.Router();

router.get('/', function(req, res){
	
	Place.find(function(err, places){
		if(err){
			res.send(err);
		}
		res.json(places);


	});
})

router.post('/', function(req, res){
	var place = new Place();
	
	place.name = req.body.name;
	place.city = req.body.city;
	place.buildingName = req.body.buildingName;
	place.street = req.body.street;
	place.buildingNumber = req.body.buildingNumber;
	place.phone = req.body.phone;

	place.save(function(err){
		if(err){
			res.send(err);
		}
		res.json({message:'Place added to db', data: place});
	
	});
});

app.use('/api', router);

app.listen(port);

console.log('App initialized');

