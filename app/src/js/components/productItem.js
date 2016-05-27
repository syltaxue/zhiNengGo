var React = require("react");
var Link = require('react-router').Link

var ProductItem = React.createClass({
	render: function() {
		return (
			<div className = "productItem">
				<Link to={`/product/${this.props.id}`}>
					<div className="productItem-picture"/>
					<div className="productItem-title">{this.props.product.title}</div>
					<div className="productItem-shortDescription">{this.props.product.shortDescription}</div>
					<div className="ui labeled button productItem-info">
						<div className="ui red button">
							<i className="heart icon"></i> Like
						</div>
						<div className="ui basic red left pointing label">0</div>
					</div>
				</Link>
			</div>
		);
	}
});

module.exports = ProductItem;