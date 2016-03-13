var React = require('react');
var ReactDOM = require('react-dom');
var Picture = require('./../shared/Picture');
var RaisedButton = require('material-ui/lib/raised-button');
var Comment = require("./../components/comment");
var commentTotal = 22;
var Product = React.createClass({
	getInitialState: function() {
		return {
			login:false,   // set to true to see the add comment button 
			loadingMoreItem: false,
			numberOfComments: 5,
		};
	},
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
							<div className="commentsContainer">
								{this.renderAddComment()}
								{this.renderGetTitle()}
								<div className = "comment-box">
									{this.renderComments()}
									{this.renderLoadMoreBtn()}
								</div>
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
	},

	renderLoadMoreBtn: function() {
		if (this.state.numberOfComments <= commentTotal) {
			if (this.state.loadingMoreItem) {
				return (
					<button className="ui loading button" id="loadMoreBtn">Loading</button>
				);
			} else {
				return (
					<button className="ui button" id="loadMoreBtn" onClick={this.loadMoreComments}>点击加载更多评论</button>
				);
			}
		} else {
			if (this.state.loadingMoreItem) {
				return (
					<button className="ui loading button" id="loadMoreBtn">Loading</button>
				);
			} else {
				return (
					<button className="ui button" id="loadMoreBtn" onClick={this.lessComments}>收起评论</button>
				);
			}
		}

	},
	lessComments: function() {
		this.setState({
			loadingMoreItem: true,
			numberOfComments: 5
		});
		setTimeout(function(){
			this.setState({
				loadingMoreItem: false
			});
		}.bind(this), 1000);
	},

	loadMoreComments: function() {
		if ((this.state.numberOfComments + 10) > commentTotal) {
			this.setState({
				loadingMoreItem: true,
				numberOfComments: commentTotal
			});
		} else {
			this.setState({
				loadingMoreItem: true,
				numberOfComments: this.state.numberOfComments + 10
			});
		}

		setTimeout(function(){
			this.setState({
				loadingMoreItem: false
			});
		}.bind(this), 1000);
	},
	renderComments: function() {
		var arrayContainer = Array.apply(null, Array(this.state.numberOfComments)).map(function () {});
		var comments = arrayContainer.map(function(item, index) {
			return (
				<Comment id={index} key={index}/>
			);
		});

		var renderComponents = (
			<div className = "comment-box">
				{comments}
			</div>
		);

		return comments;
	},
	renderGetTitle: function() {
		return (
			<div className="comment-title">
				<h3 className="ui dividing header">全部评论: {commentTotal}</h3>
			</div>
		);
	},

	renderAddComment: function() {
		if (this.state.login) {
			return (
				<div className="add-comment">
					<form className="ui reply form">
						<div className="field">
							<textarea placeholder="为此件商品添加评论..."></textarea>
						</div>
						<div className="ui blue labeled submit icon button">
							<i className="icon edit"></i> 添加评论
						</div>
					</form>
				</div>
			);
		} else {
			return (
				<div className="add-comment">
					<form className="ui reply form">
						<div className="field">
							<textarea placeholder="为此件商品添加评论..."></textarea>
						</div>
						<p>请先<a href="javascript:alert('Login need to be implemented');">登录</a>参与评论</p>
					</form>
				</div>
			);
		}
	},
});

module.exports = Product;
