var React = require("react");

var Greeting = React.createClass({
	render: function() {
		return (
			<div className = "greeting">
				<h1> Hello, {this.props.name}! </h1>
			</div>
		);
	}
});

module.exports = Greeting;