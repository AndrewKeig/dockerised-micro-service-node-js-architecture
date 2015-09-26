'use strict';

const db = require('../store/db');

module.exports.notifications = (req, res) => {
	db.notifications.find({}, (err, notifications) => {
		if (err) {
			return res.status(400).json('Error');
		}

		return res.status(200).json(notifications);	
	});
};