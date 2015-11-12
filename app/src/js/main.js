var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./header');
var Navigator = require('./navigator');
var Body = require('./body');
var Footer = require('./footer');

var Home = React.createClass({
	render: function() {
		return (
			<div id = "Home">
				<Header/>
				<Navigator/>
				<Body/>
				<Footer/>
			</div>
		);
	}
});

ReactDOM.render(<Home />, document.getElementById("app"));