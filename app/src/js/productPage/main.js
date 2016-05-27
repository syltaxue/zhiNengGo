var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./../shared/header');
var Footer = require('./../shared/footer');
var Comments = require('./comments');
var Navigator = require('./../shared/Navigator');
var Body = require('./body');
var ProductPage = React.createClass({
	render: function() {
		return (
			<div id = "ProductPage">
				<Header/>
				<Navigator/>
				<Body productId={this.props.params.productId}/>
				<Comments/>
				<Footer/>
			</div>
		);
	}
});

module.exports = ProductPage;