var path = require('path');
var fs = require('fs');
var express = require('express');
var mysql = require('mysql');
var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : '19930208',
	database : 'cs304'
});

// Create an express instance and set a port variable

var app = express();
// app.use('/', express.static(path.join(__dirname, 'public')));

connection.connect(function(err){
	if (!err) {
		console.log("Database is connected ...");    
	} else {
		console.log("Error connecting database :", err);    
	}
});





var server = app.listen(80);
console.log('Server listening on port 80');

connection.query('SELECT * from recipes', function(err, rows, fields) {
connection.end();
if (!err)
	console.log('The query result from database is: ', rows);
else
	console.log('Error while performing Query.');
});

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