var express = require('express');
var app = express();

// set view as jade
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

var locations = [
	'/iida',
	'/minamiaizu',
	'/aizuwakamatsu',
	'/okazaki',
	'/tokyo'
];

var locationsFormatted = [
	'Iida, Nagano',
	'Minamiaizu, Fukushima',
	'Aizuwakamatsu, Fukushima',
	'Okazaki, Aichi',
	'Tokyo'
]

// tells express to look in the public folder for ???
app.use(express.static(__dirname + '/public'));

var getNextLocation = function(currentLocation) {
	// needs current page
	for(var i=0; i<locations.length; i++){
		// console.log(currentLocation, locations[i]);
		if(currentLocation === locations[i]) {
			nextPage = locations[i+1];
			console.log(nextPage);
			// stop execution of this function and give back a value
			return nextPage;
		}
	}
};

app.get('/iida', function(req, res) {
	res.render('iida', {
		jadeVar: locationsFormatted[0]
	});
	var currentPage = req.path;
	var nextUrl = getNextLocation(currentPage); 

	// console.log(locations);
	// console.log(currentPage);
	// console.log(nextPage);
});

app.get('/minamiaizu', function(req, res){
	res.render('minamiaizu');
	var currentPage = req.path;
	var nextUrl = getNextLocation(currentPage); 
});

app.get('/aizuwakamatsu', function(req, res){
	res.render('aizuwakamatsu');
	var currentPage = req.path;
	var nextUrl = getNextLocation(currentPage); 
});

app.get('/okazaki', function(req, res){
	res.render('okazaki');
	var currentPage = req.path;
	var nextUrl = getNextLocation(currentPage); 
});

app.get('/tokyo', function(req, res){
	res.render('tokyo');
	var currentPage = req.path;
	var nextUrl = getNextLocation(currentPage); 
});

// open the port 7047 and listen for page requests
var server = app.listen(7047, function() {
	console.log('Express server listening on port ' + server.address().port);
});

