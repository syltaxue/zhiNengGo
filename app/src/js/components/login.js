var React = require('react');
var Router  = require('react-router') ;
var ReactDOM = require('react-dom');
var Link = require('react-router').Link;
var userStore = require("./../stores/userStore");
var userActions = require("./../actions/userActions");

var login = React.createClass({
	mixins : [Router.Navigation],
	render: function() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-6 col-md-4 col-md-offset-4">
						<h1 className="text-center login-title">Sign in to continue</h1>
						<div className="account-wall">
							<img className="profile-img" src="https://s.yimg.com/dh/ap/social/profile/profile_b96.png" alt=""/>
							<form className="form-signin" onSubmit={this._onClickLogin}>
								<input type="text" name="username" className="form-control" placeholder="Username" ref="loginUserName" required autofocus/>
								<input type="password" name="password" className="form-control" ref="loginPassword" placeholder="Password" required/>
								<div className="login-buttons">
									<button className="btn btn-lg btn-primary btn-block login-button login-firstButton" type="submit">登录</button>
									<Link className="login-link" to={`/createAccount`}>
										<button className="btn btn-lg btn-primary btn-block login-button">新用户</button>
									</Link>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	},

	_onClickLogin: function(event) {
		var history = this.props.history;
		var loginInfo = {username: this.refs.loginUserName.value, password:this.refs.loginPassword.value};
		socket.on('Return validateLogin', function (userInfo) {
			userActions.updateUser(userInfo);
			if (!userInfo.length) {
				window.alert("Login not successful, please verify your username and password.");
			} else {
				history.pushState(null, '/');
			}
		});
		socket.emit('validateLogin', loginInfo);
		event.preventDefault();
	}
});

module.exports = login;