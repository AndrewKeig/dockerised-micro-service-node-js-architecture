'use strict';

var express 	= require('express');
var routes 		= require('./resources/routes');
var app 		= express();

app.get('/notifications', routes.notifications);

app.listen(3000);

module.exports = app;