var mysql = require('mysql');
var connection = mysql.createConnection({
	host : 'zhinenggo.cp5gxr6uuu2i.us-west-2.rds.amazonaws.com',
	user : 'zhinenggo',
	password : 'zhinenggo',
	database : 'zhinenggo'
});

module.exports = connection;