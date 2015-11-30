var React = require('react');
var ReactDOM = require('react-dom');

var Product = React.createClass({
	render: function() {
		return (
			<div className = "productContainer">
				Product Body: Replace this with actual content...
				Product ID:{this.props.productId}
			</div>
		);
	}
});

module.exports = Product;