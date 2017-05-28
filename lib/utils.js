'use strict';

var conf = require('./conf.js');

var mongodb = require('mongodb'); 

var MongoClient = mongodb.MongoClient, 
assert = require('assert');

module.exports.add = function(event, col, data, callback) {
    MongoClient.connect(conf.db_url, function(err, db) {
      assert.equal(null, err);
      console.log("Connected successfully to server");
      var collection = db.collection(col);      
      collection.insert( data , function(err, result) {
        db.close();
        var status = false;
        if(result.insertedCount == 1){
          status = true;
        }
        const response = {
          statusCode: 200,
          body: JSON.stringify({
            status: status,
            data: data,
          }),
        };
        console.log(response);

        callback(null, response);
      });
    });
};

module.exports.find = function(event,col,query,sort,callback) {
    // Use connect method to connect to the server
    MongoClient.connect(conf.db_url, function(err, db) {
      assert.equal(null, err);

      console.log("Connected successfully to server");

      var collection = db.collection(col);

      collection.find(query).sort(sort).toArray(function(err, docs) {
        assert.equal(err, null);
        console.log("Found the following records");
        console.log(docs);
        var status = false;
        if(docs.length > 0 ){
          status = true;
        }
        db.close();
        const response = {
          statusCode: 200,
          body: JSON.stringify({
            status : status,
            data: docs,
          }),
        };
        console.log(response)
        callback(null, response );
      });
    });
};
