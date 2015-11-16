var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./header');
var Navigator = require('./navigator');
var Body = require('./body');
var Footer = require('./footer');
// This library is for listening all the events for material-ui
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

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