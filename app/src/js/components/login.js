var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./../shared/header');
var Navigator = require('./../shared/navigator');
var Picture = require('./../shared/Picture');
var Body = require('./body');
var Footer = require('./../shared/footer');
var Home = React.createClass({
	componentDidMount: function() {
		// socket.on('comments', function (comments) {
		// 	console.log("received comments : ", comments);
		// });
		// socket.emit('fetchComments');
	},

	render: function() {
		return (
			<div class="container">
				<div class="row">
					<div class="col-sm-6 col-md-4 col-md-offset-4">
						<h1 class="text-center login-title">Create an account</h1>
						<div class="account-wall">
							<form id="createForm" class="form-signin" method="post">
									<div style="display:none">
										<input type="text" name="type" value="createAcc"/>
									</div>
									<div class=" inputTitle">Username</div>
									<input type="text" class="form-control" name="username" placeholder="Username" required autofocus>
									<div class=" inputTitle">Password</div>
									<input id="password" type="password" class="form-control" name="password" placeholder="Password" required>
									<div class=" inputTitle">Password again</div>
									<input id="passwordConfirm" type="password" class="form-control" name="passwordConfirm" placeholder="Confirm Password" required>
									<div class=" inputTitle">Last Name</div>
									<input type="text" class="form-control" name="lastname" placeholder="LastName" required>
									<div class=" inputTitle">First Name</div>
									<input type="text" class="form-control" name="firstname" placeholder="FirstName" required>
									<button id="submitBtn" class="btn btn-lg btn-primary btn-block" type="submit" onclick="verifyPW(event);">
										Submit
									</button>
							</form>
						</div>
					</div>
				</div>
		</div>
		);
	}
});

module.exports = Home;