'use strict';

var request       = require('supertest');
var BulkMongoDb   = require('bulk-mongodb');
var expect        = require('chai').expect;

var app 		      = require('../app');
var config        = require('../config');
var notifications = require('../fixtures/notifications');

describe('notifications', function() {
  var bulkMongoDb;

  before(function(done) {
    
    var data = [{ collection : 'notifications', documents : notifications }];
 
    bulkMongoDb = new BulkMongoDb(config.db.url, data);

    bulkMongoDb.insert(function() {
      done();
    });
  });

  after(function(done) {
    bulkMongoDb.drop(function() {
      done();
    });
  });

  describe('when requesting notifications', function() {
  	var response;
  	var headers;

    it('should respond with a 200 status code', function(done) {
      request(app)
        .get('/notifications')
        .expect('Content-Type', /json/)
        .end(function (err, res) {
            if (err) { return done(err); }
            response = JSON.parse(res.text);
            //console.log(response);
            headers = res.headers;
            expect(res.status).to.equal(200);
            done();
    		});
    });

    it('should return a json response', function(){
        expect(headers['content-type']).to.equal('application/json; charset=utf-8');
    });

    it('should return 5 notifications', function(){
        expect(response.length).to.equal(5);
    });
  });
});