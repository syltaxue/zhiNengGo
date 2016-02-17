var path = require('path');
var fs = require('fs');
var express = require('express');

// Create an express instance and set a port variable

var app = express();
app.use('/', express.static(path.join(__dirname, 'public')));

var server = app.listen(80);
console.log('Server listening on port 80');

// Socket.IO part
var io = require('socket.io')(server);

var sendComments = function (socket) {
	socket.emit('comments', "hello, sending initial fetches");
};

io.on('connection', function (socket) {
	console.log('New client connected!');

	socket.on('init', function () {
		console.log('init!');
	});

	socket.on('fetchComments', function () {
		sendComments(socket);
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