var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./header');

var Home = React.createClass({
	render: function() {
		return (
			<div className = "Home">
				<Header/>
			</div>
		);
	}
});

ReactDOM.render(<Home />, document.getElementById("app"));