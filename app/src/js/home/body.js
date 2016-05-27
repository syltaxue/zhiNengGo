var React = require("react");
var Reflux = require("reflux");
var ProductItem = require("./../components/productItem");
var IconButton = require('material-ui/lib/icon-button');
var productStore = require("./../stores/productStore");
var productActions = require("./../actions/productActions");

var Body = React.createClass({
	mixins: [Reflux.connect(productStore,"productList")],
	getInitialState: function() {
		return {
			loadingMoreItem: false,
			numberOfProducts: 10
		};
	},

	componentDidMount: function() {
		socket.on('Return fetchProducts', function (products) {
			productActions.updateProducts(products);
		});
		socket.emit('fetchProducts');
		// Have the navigator stick to the page while scrolling
		$('.ui.sticky')
			.sticky({
				bottomOffset: 50,
				context: '#bodyContext'
		});
	},

	render: function() {
		console.log(this.state.productList);
		return this.state ? (
			<div id ="bodyContext">
				<div className = "row">
					<div className = "col-sm-1">
					</div>
					<div className = "col-xs-12 col-sm-10">
						<div className="ui right rail">
							<div className = "ui bound bottom sticky">
								<button className="ui icon button" onClick={this.scrollToTop}>
									<i className="arrow up icon"></i>
								</button>
							</div>
						</div>
						<div className = "body">
							<div className = "body-container">
								<div className = "body-recommendText">推荐/精选</div>
								<div className = "body-products">
									{this.renderProducts()}
								</div>
								<div className = "body-loadMoreBtn">
									{this.renderLoadMoreBtn()}
								</div>
							</div>
						</div>
					</div>
					<div className = "col-sm-1">
					</div>
				</div>
			</div>
		) : ('');
	},

	scrollToTop: function() {
		window.scrollTo(0, 0);
	},

	renderLoadMoreBtn: function() {
		if (this.state.loadingMoreItem) {
			return (
				<button className="ui loading button" id="loadMoreBtn">Loading</button>
			);
		} else {
			if (this.state.productList.size < this.state.numberOfProducts) {
				return (
					<button className="ui button" id="loadMoreBtn" onClick={this.loadMoreProducts}>点击加载更多</button>
				);
			} else {
				return ('');
			}
		}
	},

	renderProducts: function() {
		var displayAmount = this.state.numberOfProducts;
		// var arrayContainer = Array.apply(null, Array(this.state.numberOfProducts)).map(function () {});
		if (!this.state || !this.state.productList) return ('');
		var products = this.state.productList.map(function(item, index) {
			if (index < displayAmount) {
				return (
					<ProductItem id={item.productID} product={item} key={index}/>
				);
			} else {
				return ('');
			}
		});

		var renderComponents = (
			<div className = "body-products">
				{products}
			</div>
		);

		return products;
	},

	loadMoreProducts: function() {
		this.setState({
			loadingMoreItem: true,
			numberOfProducts: this.state.numberOfProducts + 10
		});


	setTimeout(function(){
		this.setState({
			loadingMoreItem: false
		});
	}.bind(this), 1000);
	}
});

module.exports = Body;
