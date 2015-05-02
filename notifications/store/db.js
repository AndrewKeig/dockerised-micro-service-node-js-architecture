'use strict';

var Mongo  = require('mongojs');
var config = require('../config');
var db 		 = null;

var connect = function() {
	if (db) { return db; }

  db = new Mongo(config.db.url, config.db.collections);
  return db;
};

module.exports = connect();