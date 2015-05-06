var express = require('express');
var	stylus = require('stylus');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'developement';

//app is the express server
var app = express();

//configure stylus & express
function compile(str, path) {
	return stylus(str).set('filename',path);

}


app.set('views',__dirname + '/server/views');
app.set('view engine','jade');
app.use(logger('dev'));
app.use(bodyParser());
app.use(stylus.middleware(
		{
			src: __dirname + '/public',
			compile: compile

		}

	));
//server directly specified files in public if they are requested
app.use(express.static(__dirname + '/public'));


//use local db if in developement mode
if (env === 'developement') {
	console.log('In ' + env + ' mode...using local DB')
	mongoose.connect('mongodb://localhost/multivision');
} else {
	console.log('In ' + env + ' mode...connecting to mongolab')
	mongoose.connect('mongodb://ryan:multivision@ds031982.mongolab.com:31982/multivision');
}


var db = mongoose.connection;

db.on('error',console.error.bind(console, 'connection error....'));
db.once('open', function callback() {
	console.log('multivision db openend');
});




//render angular partails
app.get('/partials/*', function (req,res) {
	res.render('../../public/app/' + req.params[0])
});

//make every request go to index file
app.get('*',function(req,res) {
	res.render('index', {
	});
});


var port = process.env.PORT || 3030;
app.listen(port);
console.log('Listening on port ' + port + '....');