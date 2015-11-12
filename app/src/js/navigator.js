var React = require("react");


var Navigator = React.createClass({
	render: function() {
		return (
			<div className = "navigator">
				<div className = "navigator-container">
					<div className = "navigator-buttons">
						<div className = "navigator-buttons-button-firstChild">首页</div>
						<div className = "navigator-buttons-button">分类1</div>
						<div className = "navigator-buttons-button">分类2</div>
						<div className = "navigator-buttons-button">分类3</div>
						<div className = "navigator-buttons-button">分类4</div>
					</div>
					<div className = "navigator-picture">
						<div>图片</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Navigator;