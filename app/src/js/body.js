var React = require("react");
var ProductItem = require("./components/productItem");

var Body = React.createClass({
	render: function() {
		return (
			<div className = "body">
				<div className = "body-container">
					<div>推荐/精选</div>
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
		);
	}
});

module.exports = Body;