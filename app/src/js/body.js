var React = require("react");
var ProductItem = require("./components/productItem");
var IconButton = require('material-ui/lib/icon-button');


var Body = React.createClass({
	render: function() {
		return (
			<div id ="bodyContext">
				<div className = "row">
					<div className = "col-sm-1">
					</div>
					<div className = "col-xs-12 col-sm-9">
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
									<ProductItem />
									<ProductItem />
									<ProductItem />
									<ProductItem />
									<ProductItem />
									<ProductItem />
									<ProductItem />
									<ProductItem />
									<ProductItem />
									<ProductItem />
									<ProductItem />
									<ProductItem />
									<ProductItem />
									<ProductItem />
									<ProductItem />
									<ProductItem />
									<ProductItem />
									<ProductItem />
									<ProductItem />
									<ProductItem />
									<ProductItem />
									<ProductItem />
									<ProductItem />
									<ProductItem />
									<ProductItem />
									<ProductItem />
									<ProductItem />
									<ProductItem />
									<ProductItem />
									<ProductItem />
									<ProductItem />
									<ProductItem />
									<ProductItem />
									<ProductItem />
									<ProductItem />
								</div>
							</div>
						</div>
					</div>
					<div className = "col-sm-2">
					</div>
				</div>
			</div>
		);
	},

	scrollToTop: function() {
		window.scrollTo(0, 0);
	}
});

module.exports = Body;