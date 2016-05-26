var connection = require('./connection');

var fetchProducts = function() {
}

fetchProducts.prototype.fetchProducts = function () {
	connection.query('SELECT * from product', function(err, rows, fields) {
		connection.end();
		if (err)
			console.log('Error while performing Query.');
		else 
		{
			console.log("rows", rows);
		}
	});
}

module.exports = fetchProducts;