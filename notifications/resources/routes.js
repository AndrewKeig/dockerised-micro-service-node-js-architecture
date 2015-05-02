'use strict';

var db = require('../store/db');

module.exports.notifications = function(req, res){
	db.notifications.find({}, function (err, notifications) {
		if (err) {
			return res.status(400).json('Error');
		}

		return res.status(200).json(notifications);	
	});
};