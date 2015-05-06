var express = require('express');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'developement';

//app is the express server
var app = express();

//get our configuration files
var config = require('./server/config/config')[env];

//get webserver up & running
require('./server/config/express')(app,config);

//configure and connect to db
require('./server/config/db')(config);

var User = mongoose.model('User');
passport.use(new LocalStrategy(
        function(username, password, done) {
            User.findOne({username:username}).exec(function(err,user) {
                if (user) {
                    return done(null, user);
                } else {
                    return done(null, false);
                }
            });
        }
))

passport.serializeUser(function(user, done) {
    if (user) {
        done(null, user._id)
    }
})

passport.deserializeUser(function(id, done) {
    User.findOne({_id:id}).exec(function(err, user) {
        if (user) {
            return done(null, user)
        } else {
            return done(null, false)
        }
    })
})

//get all routing working
require('./server/config/routes')(app);

//start listening on web server
app.listen(config.port);
console.log('Listening on port ' + config.port + '....');
	console.log(config.rootPath + '/server/views');
