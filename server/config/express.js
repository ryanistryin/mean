var express = require('express');
var stylus = require('stylus');
var logger = require('morgan');
var bodyParser = require('body-parser');


module.exports = function(app,config) {

        //config.rootPath = config.rootPath || __dirname;

	//configure stylus & express
	function compile(str, path) {
		return stylus(str).set('filename',path);

	}

	app.set('views',config.rootPath + '/server/views');
	app.set('view engine','jade');
	app.use(logger('dev'));
	app.use(bodyParser());
	app.use(stylus.middleware(
			{
				src: config.rootPath + '/public',
				compile: compile

			}

		));
	//server directly specified files in public if they are requested
        console.log(config.rootPath)
	app.use(express.static(config.rootPath + '/public'));

}