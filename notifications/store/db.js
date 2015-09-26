'use strict';

const Mongo = require('mongojs');
const config = require('../config');
let db = null;

const connect = () => {
  if (db) { return db; }

  db = new Mongo(config.db.url, config.db.collections);
  return db;
};

module.exports = connect();