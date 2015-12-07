var React = require("react");
var DropDownMenu = require('material-ui/lib/drop-down-menu');
var Link = require('react-router').Link

var Navigator = React.createClass({
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
			<div className = "navigator ui sticky">
				<div className = "navigator-container">
					<div className = "row">
						<div className = "col-sm-1">
						</div>
						<div className = "col-xs-12 col-sm-10">
								<div className = "navigator-buttons">
									<div className="ui menu">
										<div className={"navigator-buttons-button" + homeButtonState}>
											<div className = "item" onClick={this._handleClick.bind(this, 'home')}>
												<Link className="navigator-buttons-text" to={'/'}>首页</Link>
											</div>
										</div>
										{this._renderTypeA()}
										{this._renderTypeB()}
										{this._renderTypeC()}
										{this._renderTypeD()}
									</div>
								</div>
						</div>
						<div className = "col-sm-1">
						</div>
					</div>
				</div>
			</div>
		);
	},

	_renderTypeA: function() {
		var buttonState = this.state.active === 'TypeA' ? ' active' : '';
		return(
			<div className={"navigator-buttons-button" + buttonState}>
				<div className="ui simple dropdown item">
					<div className="navigator-buttons-text">
						分类1
					</div>
					<i className="dropdown icon navigator-buttons-text"></i>
					<div className="menu">
						<div className="item" onClick={this._handleClick.bind(this, 'TypeA')}>类型1</div>
						<div className="item" onClick={this._handleClick.bind(this, 'TypeA')}>类型2</div>
						<div className="item" onClick={this._handleClick.bind(this, 'TypeA')}>类型3</div>
					</div>
				</div>
			</div>
		);
	},

	_renderTypeB: function() {
		var buttonState = this.state.active === 'TypeB' ? ' active' : '';
		return(
			<div className={"navigator-buttons-button" + buttonState}>
				<div className="ui simple dropdown item">
					<div className="navigator-buttons-text">
						分类2
					</div>
					<i className="dropdown icon navigator-buttons-text"></i>
					<div className="menu">
						<div className="item" onClick={this._handleClick.bind(this, 'TypeB')}>类型1</div>
						<div className="item" onClick={this._handleClick.bind(this, 'TypeB')}>类型2</div>
						<div className="item" onClick={this._handleClick.bind(this, 'TypeB')}>类型3</div>
					</div>
				</div>
			</div>
		);
	},

	_renderTypeC: function() {
		var buttonState = this.state.active === 'TypeC' ? ' active' : '';
		return(
			<div className={"navigator-buttons-button" + buttonState}>
				<div className="ui simple dropdown item">
					<div className="navigator-buttons-text">
						分类3
					</div>
					<i className="dropdown icon navigator-buttons-text"></i>
					<div className="menu">
						<div className="item" onClick={this._handleClick.bind(this, 'TypeC')}>类型1</div>
						<div className="item" onClick={this._handleClick.bind(this, 'TypeC')}>类型2</div>
						<div className="item" onClick={this._handleClick.bind(this, 'TypeC')}>类型3</div>
					</div>
				</div>
			</div>
		);
	},

	_renderTypeD: function() {
		var buttonState = this.state.active === 'TypeD' ? ' active' : '';
		return(
			<div className={"navigator-buttons-button" + buttonState}>
				<div className="ui simple dropdown item">
					<div className="navigator-buttons-text">
						分类4
					</div>
					<i className="dropdown icon navigator-buttons-text"></i>
					<div className="menu">
						<div className="item" onClick={this._handleClick.bind(this, 'TypeD')}>类型1</div>
						<div className="item" onClick={this._handleClick.bind(this, 'TypeD')}>类型2</div>
						<div className="item" onClick={this._handleClick.bind(this, 'TypeD')}>类型3</div>
					</div>
				</div>
			</div>
		);
	},

	_handleClick: function(type) {
		this.setState({active: type});
	}
});

module.exports = Navigator;