var Reflux = require("reflux");

var userActions = Reflux.createActions([
    'updateUser',
    'validateLogin'
    ]);

module.exports = userActions;
