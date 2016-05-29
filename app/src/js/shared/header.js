var React = require("react");
var Reflux = require("reflux");
var RaisedButton = require('material-ui/lib/raised-button');
var Link = require('react-router').Link;
var userStore = require("./../stores/userStore");
var userActions = require("./../actions/userActions");

var Header = React.createClass({
	mixins: [Reflux.listenTo(userStore, "onUserUpdate")],
	getInitialState: function() {
		return ({
			active: 'home'});
	},
	shouldComponentUpdate: function(nextProps, nextState) {
		if (this.props !== nextProps) return true;
		if (this.state && this.state.active !== nextState.active) return true;
		if (this.state && this.state.user !== nextState.user) return true;
		return false;
	},
	render: function() {
		var homeButtonState = this.state.active === 'home' ? ' active' : '';
		return (
			<div className = "header">
				<div className = "header-container">
					<div className= "row">
						<div className = "col-sm-1"></div>
						<div className = "col-xs-4 col-sm-3">
							<div className = "item" onClick={this._handleClick.bind(this, 'home')}>
								<Link className="header-buttons-text" to={'/'}>智能GO </Link>
							</div> 
						</div>
						<div className = "col-xs-6 col-sm-5">
							<div className = "header-searchEngine">
								<div className="ui category search">
									<div className="ui icon input">
										<input className="prompt" type="text" placeholder="搜索..."/>
										<button className="ui icon button" id="header-Search-Icon" onClick={this._onClickSearch} >
											<i className="search icon"></i>
										</button>
									</div>
									<div className="results"></div>
								</div>
							</div>
						</div>
						<div className="col-xs-2 col-sm-2">
							{this._renderUserStats()}
						</div>
						<div className= "col-sm-1"></div>
					</div>
				</div>
			</div>
		);
	},

	onUserUpdate: function(user) {
		this.setState({user: user});
	},

	_onClickSearch: function() {
		window.alert("Search clicked");
	},

	_handleClick: function(type) {
		this.setState({active: type});
	},

	_renderUserStats: function() {
		var loginStorage = sessionStorage.login ? JSON.parse(sessionStorage.login) : null;
		if ((this.state && this.state.user && this.state.user[0] && this.state.user[0].userName)) {
			return (
				<div className="header-login">
					<div className="header-login-user">Hello, {this.state.user[0].displayName}</div>
					<RaisedButton label="退出" primary={true} onClick={this._onClickLogout}/>
				</div>
			);
		} else if (loginStorage && loginStorage.userName) {
			return (
				<div className="header-login">
					<div className="header-login-user">Hello, {loginStorage.displayName}</div>
					<RaisedButton label="退出" primary={true} onClick={this._onClickLogout}/>
				</div>
			);
		} else {
			return (
				<div className="header-login">
					<Link to={`/login`}>
						<RaisedButton label="登陆/注册" primary={true} />
					</Link>
				</div>
			);
		}
	},
	_onClickLogout: function() {
		userActions.clearUser();
		sessionStorage.login = null;
	}
});

module.exports = Header;