var React = require('react');
var Reflux = require('reflux');
var ReactDOM = require('react-dom');
var Picture = require('./../shared/Picture');
var RaisedButton = require('material-ui/lib/raised-button');
var productStore = require("./../stores/productStore");
var productActions = require("./../actions/productActions");

var Product = React.createClass({
	mixins: [Reflux.connect(productStore,"product")],
	getInitialState: function() {
		return {
			product: []
		};
	},
	componentDidMount: function() {
		// Fetch product details from server
		socket.on('Return fetchProductByID', function (products) {
			productActions.updateProducts(products);
		});
		socket.emit('fetchProductByID', this.props.productId);
	},

	render: function() {
		console.log(this.state.product);
		var product = this.state.product[0];
		return product ? (
			<div className = "productContainer">
				<div id ="bodyContext">
					<div className = "row">
						<div className = "col-sm-1">
						</div>
						<div className = "col-xs-12 col-sm-10">
							<div className="ui right rail"></div>
							<div className="product-title">Title: {product.title}</div>
							<div>Category: {product.category}</div>
							<div>createdTime: {product.createdTime}</div>
							<div>description: {product.description}</div>
							<div>link: {product.link}</div>
							<div>price: {product.price}</div>
							<div>productID: {product.productID}</div>
							<div>shortDescription: {product.shortDescription}</div>
							<div className='product-picture'><Picture/></div>
							<RaisedButton label="查看详情" onClick={this._onClicktoDetail} primary={true} />
								<div className="share-button">分享到</div>
								<button className="ui icon button" id="facebook square icon">
									<i className="facebook square icon"></i>
								</button>
							Product ID:{this.props.productId}
						</div>
						<div className = "col-sm-1">
						</div>
					</div>
				</div>
			</div>
		) : (<div/>);
	},

	_onClicktoDetail: function() {
		window.alert("Website link");
	}
});

module.exports = Product;
