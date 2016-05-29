var Reflux = require("reflux");

var userActions = Reflux.createActions([
	 'clearUser',
    'updateUser',
    'validateLogin'
    ]);

module.exports = userActions;
