var connection = require(__dirname + '/connection');

var sendComments = function() {
}

sendComments.prototype.sendComments = function () {
	connection.query('SELECT * from user', function(err, rows, fields) {
	connection.end();
	if (!err)
		console.log('The query result from database is: ', rows);
	else
		console.log('Error while performing Query.');
	});
}

module.exports = sendComments;