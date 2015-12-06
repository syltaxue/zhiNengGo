var React = require('react');
var ReactDOM = require('react-dom');
var Picture = require('./../shared/Picture');
var RaisedButton = require('material-ui/lib/raised-button');

var Product = React.createClass({
	render: function() {
		return (
			<div className = "productContainer">
				Product1 文字介绍
				<Picture/>
				<RaisedButton label="查看详情" onClick={this._onClicktoDetail} primary={true} />
				Product ID:{this.props.productId}
			</div>
		);
	},
	_onClicktoDetail: function() {
		window.alert("Website link");
	}
});

module.exports = Product;