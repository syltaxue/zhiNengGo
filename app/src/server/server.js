var path = require('path');
var fs = require('fs');
var express = require('express');
var connection = require(__dirname + '/connection');

// Create an express instance and set a port variable
var app = express();

var server = app.listen(80);
console.log('Server listening on port 80');

// Socket.IO part
var io = require('socket.io')(server);

io.on('connection', function (socket) {
	console.log('New client connected, socket ID: ', socket.id);

	socket.on('init', function () {
		console.log('init!');
	});

	socket.on('fetchProducts', function () {
		connection.query('SELECT * from product', function(err, rows, fields) {
			if (err)
				console.log('Error while performing Query fetchProducts.');
			else 
			{
				socket.emit('Return fetchProducts', rows);
			}
		});
	});

	socket.on('fetchProductByID', function (productID) {
		connection.query('SELECT * from product WHERE productID = ' + productID + ' ', function(err, rows, fields) {
			if (err)
				console.log('Error while performing Query fetchProductByID.', err);
			else 
			{
				socket.emit('Return fetchProductByID', rows);
			}
		});
	});
	// socket.on('newComment', function (comment, callback) {
	// 	fs.readFile('_comments.json', 'utf8', function(err, comments) {
	// 		comments = JSON.parse(comments);
	// 		comments.push(comment);
	// 		fs.writeFile('_comments.json', JSON.stringify(comments, null, 4), function (err) {
	// 			io.emit('comments', comments);
	// 			callback(err);
	// 		});
	// 	});
	// });
});