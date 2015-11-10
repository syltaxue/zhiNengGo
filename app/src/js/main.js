var React = require('react');
var ReactDOM = require('react-dom');

var Home = React.createClass({
	render: function() {
		return (
			<div className = "greeting">
				<h1> Hello, World! </h1>
			</div>
		);
	}
});

ReactDOM.render(<Home />, document.getElementById("app"));