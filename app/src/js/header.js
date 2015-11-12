var React = require("react");


var Header = React.createClass({
	render: function() {
		return (
			<div className = "header">
				<div className = "header-container">
					<div className = "header-container-siteName">
						智能购
					</div>
					<div className = "header-container-searchEngine">
						搜索
					</div>
					<div className = "header-container-login">
						登陆/注册
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Header;