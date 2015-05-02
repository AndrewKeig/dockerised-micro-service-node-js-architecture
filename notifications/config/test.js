'use strict';

var name 		= '/docker-test';
var address	= process.env.DB_PORT_27017_TCP_ADDR || 'localhost';
var port 		= process.env.DB_PORT_27017_TCP_PORT || '27017';

module.exports = {
	db : {
		collections : ['notifications'],
		url  : 'mongodb://' + address + ':' + port + name
	}
};
