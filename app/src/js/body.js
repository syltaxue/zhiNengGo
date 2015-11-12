var React = require("react");
var ProductItem = require("./components/productItem");

var Body = React.createClass({
	render: function() {
		return (
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
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Body;