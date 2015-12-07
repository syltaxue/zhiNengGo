var React = require("react");
var DropDownMenu = require('material-ui/lib/drop-down-menu');
var Link = require('react-router').Link

var menuItems = [
	{ payload: '1', text: '分类' },
	{ payload: '2', text: '类型1' },
	{ payload: '3', text: '类型2' },
	{ payload: '4', text: '类型3' },
	{ payload: '5', text: '类型4' }
];
var Navigator = React.createClass({
	render: function() {
		return (
			<div className = "navigator ui sticky">
				<div className = "navigator-container">
					<div className = "navigator-buttons">
						<div className="ui menu">
							<div className = "item">
								<Link className="navigator-buttons-text" to={'/'}>首页</Link>
							</div>
							{this._renderTypeA()}
							{this._renderTypeB()}
							{this._renderTypeC()}
							{this._renderTypeD()}
						</div>
					</div>
				</div>
			</div>
		);
	},

	_renderTypeA: function() {
		return(
			<div className="ui simple dropdown item">
				分类1
				<i className="dropdown icon"></i>
				<div className="menu">
					<div className="item">类型1</div>
					<div className="item">类型2</div>
					<div className="item">类型3</div>
				</div>
			</div>
		);
	},

	_renderTypeB: function() {
		return(
			<div className="ui simple dropdown item">
				分类2
				<i className="dropdown icon"></i>
				<div className="menu">
					<div className="item">类型1</div>
					<div className="item">类型2</div>
					<div className="item">类型3</div>
				</div>
			</div>
		);
	},

	_renderTypeC: function() {
		return(
			<div className="ui simple dropdown item">
				分类3
				<i className="dropdown icon"></i>
				<div className="menu">
					<div className="item">类型1</div>
					<div className="item">类型2</div>
					<div className="item">类型3</div>
				</div>
			</div>
		);
	},

	_renderTypeD: function() {
		return(
			<div className="ui simple dropdown item">
				分类4
				<i className="dropdown icon"></i>
				<div className="menu">
					<div className="item">类型1</div>
					<div className="item">类型2</div>
					<div className="item">类型3</div>
				</div>
			</div>
		);
	}
});

module.exports = Navigator;