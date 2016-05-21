var Reflux = require("reflux");
// some variables and helpers for our fake database stuff
var todoCounter = 0,
    localStorageKey = "todos";
var productActions = require("./../actions/productActions");

function getItemByKey(list,itemKey){
    return _.find(list, function(item) {
        return item.key === itemKey;
    });
}

var productStore = Reflux.createStore({
    // this will set up listeners to all publishers in TodoActions, using onKeyname (or keyname) as callbacks
    listenables: [productActions],
    onAddProduct: function(label) {
        this.updateList([{
            key: todoCounter++,
            created: new Date(),
            isComplete: false,
            label: label
        }].concat(this.list));
    },
    // called whenever we change a list. normally this would mean a database API call
    updateList: function(list){
        localStorage.setItem(localStorageKey, JSON.stringify(list));
        // if we used a real database, we would likely do the below in a callback
        this.list = list;
        this.trigger(list); // sends the updated list to all listening components (TodoApp)
    },
    // this will be called by all listening components as they register their listeners
    getInitialState: function() {
        var loadedList = localStorage.getItem(localStorageKey);
        if (!loadedList) {
            // If no list is in localstorage, start out with a default one
            this.list = [{
                key: todoCounter++,
                created: new Date(),
                isComplete: false,
                label: 'Rule the web'
            }];
        } else {
            this.list = _.map(JSON.parse(loadedList), function(item) {
                // just resetting the key property for each todo item
                item.key = todoCounter++;
                return item;
            });
        }
        return this.list;
    }
});

module.exports = productStore;