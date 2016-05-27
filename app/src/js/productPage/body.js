var React = require('react');
var ReactDOM = require('react-dom');
var Picture = require('./../shared/Picture');
var RaisedButton = require('material-ui/lib/raised-button');
var Comment = require("./../components/comment");
var commentTotal = 22;
var Product = React.createClass({
	componentDidMount: function() {
		// Have the navigator stick to the page while scrolling

	},

	render: function() {
		console.log(this.props);
		return (
			<div className = "productContainer">
				<div id ="bodyContext">
					<div className = "row">
						<div className = "col-sm-1">
						</div>
						<div className = "col-xs-12 col-sm-10">
							<div className="ui right rail"></div>
							<div className="product-description">Product1 文字介绍</div>
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
		);
	},

	_onClicktoDetail: function() {
		window.alert("Website link");
	}
});

module.exports = Product;
