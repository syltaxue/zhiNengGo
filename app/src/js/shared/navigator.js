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
					<div className = "row">
						<div className = "col-sm-1">
						</div>
						<div className = "col-xs-12 col-sm-10">
								<div className = "navigator-buttons">
									<div className="ui menu">
										<div className="navigator-buttons-button">
											<div className = "item">
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
		return(
			<div className="navigator-buttons-button">
				<div className="ui simple dropdown item">
					<div className="navigator-buttons-text">
						分类1
					</div>
					<i className="dropdown icon navigator-buttons-text"></i>
					<div className="menu">
						<div className="item">类型1</div>
						<div className="item">类型2</div>
						<div className="item">类型3</div>
					</div>
				</div>
			</div>
		);
	},

	_renderTypeB: function() {
		return(
			<div className="navigator-buttons-button">
				<div className="ui simple dropdown item">
					<div className="navigator-buttons-text">
						分类2
					</div>
					<i className="dropdown icon navigator-buttons-text"></i>
					<div className="menu">
						<div className="item">类型1</div>
						<div className="item">类型2</div>
						<div className="item">类型3</div>
					</div>
				</div>
			</div>
		);
	},

	_renderTypeC: function() {
		return(
			<div className="navigator-buttons-button">
				<div className="ui simple dropdown item">
					<div className="navigator-buttons-text">
						分类3
					</div>
					<i className="dropdown icon navigator-buttons-text"></i>
					<div className="menu">
						<div className="item">类型1</div>
						<div className="item">类型2</div>
						<div className="item">类型3</div>
					</div>
				</div>
			</div>
		);
	},

	_renderTypeD: function() {
		return(
			<div className="navigator-buttons-button">
				<div className="ui simple dropdown item">
					<div className="navigator-buttons-text">
						分类4
					</div>
					<i className="dropdown icon navigator-buttons-text"></i>
					<div className="menu">
						<div className="item">类型1</div>
						<div className="item">类型2</div>
						<div className="item">类型3</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Navigator;