var React = require("react");
var RaisedButton = require('material-ui/lib/raised-button');

var Header = React.createClass({
	render: function() {
		return (
			<div className = "header">
				<div className = "header-container">
					<div className = "header-siteName">
						智能购
					</div>
					<div className = "header-searchEngine">
						搜索
					</div>
					<div className = "header-login">
						<RaisedButton label="登陆/注册" onClick={this._onClickLogin} primary={true} />
						
					</div>
				</div>
			</div>
		);
	},

	_onClickLogin: function() {
		window.alert("Login need to be implemented");
	}
});

module.exports = Header;