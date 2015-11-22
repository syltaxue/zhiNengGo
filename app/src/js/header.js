var React = require("react");
var RaisedButton = require('material-ui/lib/raised-button');

var Header = React.createClass({
	render: function() {
		return (
			<div className = "header">
				<div className = "header-container">
					<div className= "row">
						<div className = "col-sm-1"></div>
						<div className = "col-xs-4 col-sm-3">
							<div className = "header-siteName">
								智能GO
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
	},

	_onClickSearch: function() {
		window.alert("Search clicked");
	}
});

module.exports = Header;