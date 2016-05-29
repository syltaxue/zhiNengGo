var Reflux = require("reflux");
var userActions = require("./../actions/userActions");
var User = [];

var userStore = Reflux.createStore({
    // this will set up listeners to all publishers in TodoActions, using onKeyname (or keyname) as callbacks
    listenables: [userActions],
    init: function() {

        // Register statusUpdate action
        this.listenTo(userActions.updateUser, this.updateList);
    },
    onUpdateUser: function(user) {
        this.User = user;
        this.updateList(this.User);
    },
    onClearUser: function() {
        this.User = [];
        this.updateList(this.User);
    },
    // called whenever we change a list. normally this would mean a database API call
    updateList: function(user){
        this.trigger(this.User); // sends the updated list to all listening components (TodoApp)
    },
    // this will be called by all listening components as they register their listeners
});

module.exports = userStore;