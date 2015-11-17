var React = require("react");
var ProductItem = require("./components/productItem");
var IconButton = require('material-ui/lib/icon-button');


var Body = React.createClass({
	render: function() {
		return (
			<div className = "row">
				<div className = "col-sm-1">
				</div>
				<div className = "col-xs-12 col-sm-10">
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
				</div>
				<div className = "col-sm-1">
				</div>
			</div>
		);
	},
});

module.exports = Body;