var React = require("react");
var RaisedButton = require('material-ui/lib/raised-button');

var Header = React.createClass({
	render: function() {
		return (
			<div className = "header">
				<div className = "header-container">
					<div className= "row">
						<div className = "col-sm-1"></div>
						<div className = "col-xs-5 col-sm-4">
							<div className = "header-siteName">
								智能GO
							</div>
						</div>
						<div className = "col-xs-5 col-sm-4">
							<div className = "header-searchEngine">
								搜索
							</div>
						</div>
						<div className = "col-xs-2 col-sm-2">
							<div className = "header-login">
								<RaisedButton label="登陆/注册" onClick={this._onClickLogin} primary={true} />
							</div>
						</div>
						<div className= "col-sm-1"></div>
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