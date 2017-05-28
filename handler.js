'use strict';

var utils = require('./lib/utils.js');

// To add a record to a collection
module.exports.new = (event, context, callback) => {
	// data is the collection name
	// and the event.body object will be parsed and inserted
    utils.add(event,'data',JSON.parse(event.body),callback);
};

// To view Existing Records in the collection
module.exports.view = (event, context, callback) => {
	// data is the collection name
	// Third parameter is the {query} 
	// forth is the sort order
    utils.find(event,'data',{},{_id: -1},callback);
};
