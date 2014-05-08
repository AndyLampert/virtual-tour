var express = require('express');
var app = express();

// set view as jade
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

var locations = {

};

// tells express to look in the public folder for ???
app.use(express.static(__dirname + '/public'));

// on hitting the / page, render 'index.jade'
app.get('/', function(req, res) {
	res.render('index');
});

app.get('/iida', function(req, res) {
	res.render('iida');
});

app.get('/minamiaizu', function(req, res){
	res.render('minamiaizu');
});

app.get('/aizuwakamatsu', function(){
	res.render('aizuwakamatsu');
});

app.get('/okazaki', function(){
	res.render('okazaki');
});

app.get('tokyo', function(){
	res.render('tokyo');
});

// open the port 7047 and listen for page requests
var server = app.listen(7047, function() {
	console.log('Express server listening on port ' + server.address().port);
});

