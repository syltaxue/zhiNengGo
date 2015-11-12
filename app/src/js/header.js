var React = require("react");

require("./../less/header.less");

var Header = React.createClass({
	render: function() {
		return (
			<div className = "header">
				<h1> 智能购 {this.props.name}</h1>
			</div>
		);
	}
});

module.exports = Header;