var React = require('react');
var ReactDOM = require('react-dom');
var createAccount = React.createClass({
	render: function() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-6 col-md-4 col-md-offset-4">
						<h1 className="text-center login-title">Create an account</h1>
						<div className="account-wall">
							<form id="createForm" className="form-signin" method="post">
									<div className=" inputTitle">Username</div>
									<input type="text" className="form-control" name="username" placeholder="Username" required autofocus/>
									<div className=" inputTitle">Password</div>
									<input id="password" type="password" className="form-control" name="password" placeholder="Password" required/>
									<div className=" inputTitle">Password again</div>
									<input id="passwordConfirm" type="password" className="form-control" name="passwordConfirm" placeholder="Confirm Password" required/>
									<div className=" inputTitle">Last Name</div>
									<input type="text" className="form-control" name="lastname" placeholder="LastName" required/>
									<div className=" inputTitle">First Name</div>
									<input type="text" className="form-control" name="firstname" placeholder="FirstName" required/>
									<button id="submitBtn" className="btn btn-lg btn-primary btn-block" type="submit" onclick="verifyPW(event);">
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

module.exports = createAccount;