var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./header');

var Home = React.createClass({
	render: function() {
		return (
			<div className = "Home">
				<Header name="123"/>
				<Header name="455"/>
				<Header name="1231231"/>
				<Header name="asdasda"/>
				<Header name="asdasd"/>
			</div>
		);
	}
});

ReactDOM.render(<Home />, document.getElementById("app"));