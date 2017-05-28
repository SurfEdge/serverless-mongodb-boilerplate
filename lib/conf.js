// Connection URL

var local = true;
if(local)
	var db_url = 'mongodb://localhost:27017/boilerplate';
else
	var db_url = 'mongodb://MLAB URL';

var config = {
    'db_url': db_url
}

module.exports = config;