var mongoose = require('mongoose');
var PlaceSchema = new mongoose.Schema({
	name: String,
	ciy: String,
	buildingName: String,
	street: String,
	buildingNumber: String,
	phone: String
});

module.exports = mongoose.model('Place', PlaceSchema);
