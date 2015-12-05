var React = require("react");
var Picture = React.createClass({
	render: function() {
		return (
			<div className = "navigator">
				<div className = "navigator-container">
					<div className = "navigator-picture">
						<div>图片</div>
					</div>
				</div>
			</div>
		);
	},

});

module.exports = Picture;