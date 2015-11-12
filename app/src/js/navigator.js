var React = require("react");


var Navigator = React.createClass({
	render: function() {
		return (
			<div className = "navigator">
				<div className = "navigator-buttons">
					<div>首页</div>
					<div>分类1</div>
					<div>分类2</div>
					<div>分类3</div>
					<div>分类4</div>
				</div>
				<div className = "navigator-picture">
					<div>图片</div>
				</div>
			</div>
		);
	}
});

module.exports = Navigator;