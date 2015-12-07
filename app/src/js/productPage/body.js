var React = require('react');
var ReactDOM = require('react-dom');
var Picture = require('./../shared/Picture');
var RaisedButton = require('material-ui/lib/raised-button');

var Product = React.createClass({

	componentDidMount: function() {
		// Have the navigator stick to the page while scrolling
		$('.ui.sticky')
			.sticky({
				bottomOffset: 50,
				context: '#bodyContext'
		});
	},

	render: function() {
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
							<div className="ui fluid icon input">
								<input className="prompt" type="text" placeholder="Comment"/>
								<button className="ui icon button" id="comment outline icon">
									<i className="comment outline icon"></i>
								</button>
							</div>
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