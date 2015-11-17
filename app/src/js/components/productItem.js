var React = require("react");


var ProductItem = React.createClass({
	render: function() {
		return (
			<div className = "productItem">单个商品
			<div className="ui labeled button" tabindex="0">
  								<div className="ui red button">
    							<i className="heart icon"></i> Like
  </div>
  <a className="ui basic red left pointing label">
    1,048
  </a>
</div>	
			</div>

		);
	}
});

module.exports = ProductItem;