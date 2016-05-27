var React = require('react');
var ReactDOM = require('react-dom');
var Link = require('react-router').Link;

var login = React.createClass({
	render: function() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-6 col-md-4 col-md-offset-4">
						<h1 className="text-center login-title">Sign in to continue</h1>
						<div className="account-wall">
							<img className="profile-img" src="https://s.yimg.com/dh/ap/social/profile/profile_b96.png" alt=""/>
							<form className="form-signin" method="post">
								<input type="text" name="username" className="form-control" placeholder="Username" required autofocus/>
								<input type="password" name="password" className="form-control" placeholder="Password" required/>
								<div className="login-buttons">
									<button className="btn btn-lg btn-primary btn-block login-button login-firstButton" type="submit">Sign in</button>
									<Link to={`/createAccount`}>
										<button className="btn btn-lg btn-primary btn-block login-button" type="submit">Create Account</button>
									</Link>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = login;