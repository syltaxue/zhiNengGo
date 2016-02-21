var React = require("react");
var ReactDOM = require('react-dom');

var Comment = React.createClass({
	render: function() {
		return (
      <div className="comments">

        <div className="comments-icon">
          用户{this.props.id}头像
        </div>
        <div className="comments-content">
          <div className="comments-author">
            <a href="javascript:alert('link to user need to be implemented');">用户{this.props.id}</a>
          </div>
          <div className="comments-date">
            评论于：今天 10:30
          </div>
          <div className="comments-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip e
            x ea commodo consequat.
          </div>
          <div className="comments-like">
            <div className="ui labeled button" tabindex="0">
              <div className="ui button"><i className="thumbs up icon"></i> 赞 </div>
              <a className="ui basic label">5 </a>
            </div>
          </div>
        </div>
      </div>
		);
	}
});

module.exports = Comment;
