var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./../shared/header');
var Footer = require('./../shared/footer');

var ProductPage = React.createClass({
	render: function() {
		return (
			<div id = "ProductPage">
				<Header/>
				<Footer/>
			</div>
		);
	}
});

module.exports = ProductPage;