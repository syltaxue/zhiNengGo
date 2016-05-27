var React = require("react");
var RaisedButton = require('material-ui/lib/raised-button');
var Link = require('react-router').Link;

var Header = React.createClass({
	getInitialState: function() {
		return ({active: 'home'});
	},
	shouldComponentUpdate: function(nextProps, nextState) {
		if (this.props !== nextProps) return true;
		if (this.state && this.state.active !== nextState.active) return true;
		return false;
	},
	render: function() {
		var homeButtonState = this.state.active === 'home' ? ' active' : '';
		return (
			<div className = "header">
				<div className = "header-container">
					<div className= "row">
						<div className = "col-sm-1"></div>
						<div className = "col-xs-4 col-sm-3">
							<div className = "item" onClick={this._handleClick.bind(this, 'home')}>
								<Link className="header-buttons-text" to={'/'}>智能GO </Link>
							</div>
						</div>
						<div className = "col-xs-6 col-sm-5">
							<div className = "header-searchEngine">
								<div className="ui category search">
									<div className="ui icon input">
										<input className="prompt" type="text" placeholder="搜索..."/>
										<button className="ui icon button" id="header-Search-Icon" onClick={this._onClickSearch} >
											<i className="search icon"></i>
										</button>
									</div>
									<div className="results"></div>
								</div>
							</div>
						</div>
						<div className="col-xs-2 col-sm-2">
							<div className="header-login">
								<Link to={`/login`}>
									<RaisedButton label="登陆/注册" primary={true} />
								</Link>
							</div>
						</div>
						<div className= "col-sm-1"></div>
					</div>
				</div>
			</div>
		);
	},

	_onClickSearch: function() {
		window.alert("Search clicked");
	},

	_handleClick: function(type) {
		this.setState({active: type});
	}
});

module.exports = Header;