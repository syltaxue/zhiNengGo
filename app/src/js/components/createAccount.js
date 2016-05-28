var React = require('react');
var ReactDOM = require('react-dom');
var userStore = require("./../stores/userStore");
var userActions = require("./../actions/userActions");

var createAccount = React.createClass({
	render: function() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-6 col-md-4 col-md-offset-4">
						<h1 className="text-center login-title">Create an account</h1>
						<div className="account-wall">
							<form id="createForm" className="form-signin" method="post" onSubmit={this._onClickSubmit}>
									<div className=" inputTitle">Username</div>
									<input type="text" ref="createAccUsername" className="form-control" placeholder="Username" required autofocus/>
									<div className=" inputTitle">Password</div>
									<input id="password" ref="createAccPassword" type="password" className="form-control" placeholder="Password" required/>
									<div className=" inputTitle">Password again</div>
									<input id="passwordConfirm" ref="createAccPasswordConfirm" type="password" className="form-control" placeholder="Confirm Password" required/>
									<div className=" inputTitle">昵称</div>
									<input type="text" className="form-control" ref="createAccNickName" placeholder="Nick Name" required/>
									<div className=" inputTitle">邮件</div>
									<input type="text" className="form-control" ref="createAccEmail" placeholder="邮件" required/>
									<div className=" inputTitle">手机号码</div>
									<input type="text" className="form-control" ref="createAccPhone" placeholder="手机号码" required/>
									<button id="submitBtn" className="btn btn-lg btn-primary btn-block createAccount-submitButton" type="submit" onclick="verifyPW(event);">Submit</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	},

	_onClickSubmit: function(event) {
		var history = this.props.history;
		var accInfo = {
			username: this.refs.createAccUsername.value,
			password: this.refs.createAccPassword.value,
			passwordConfirm: this.refs.createAccPasswordConfirm.value,
			nickName: this.refs.createAccNickName.value,
			email: this.refs.createAccEmail.value,
			phone: this.refs.createAccPhone.value
		};
		if (accInfo.password !== accInfo.passwordConfirm) {
			window.alert("Please double check your password, the passwords you entered should match");
		} else {
			socket.on('Return createAccount', function (userInfo) {
				userActions.updateUser(userInfo);
				if (userInfo && userInfo.error == 1062) {
					window.alert("Sorry, the username you choose has been taken, please choose another username");
					socket.removeListener("Return createAccount");
				} else {
					history.pushState(null, '/');
				}
			});
			socket.emit('createAccount', accInfo);
		}
		event.preventDefault();
	}
});

module.exports = createAccount;