var React = require("react");


var Footer = React.createClass({
	render: function() {
		return (
			<div className = "footer">
				<div className = "footer-container">
					<div>版权 CopyRight, bla</div>
					<div>关于我们</div>
					<div>联系我们</div>
				</div>
			</div>
		);
	}
});

module.exports = Footer;