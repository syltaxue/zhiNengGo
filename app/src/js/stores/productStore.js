var Reflux = require("reflux");
var productActions = require("./../actions/productActions");

var products = {};

function getItemByKey(list,itemKey){
    return _.find(list, function(item) {
        return item.key === itemKey;
    });
}

var productStore = Reflux.createStore({
    // this will set up listeners to all publishers in TodoActions, using onKeyname (or keyname) as callbacks
    listenables: [productActions],
    onAddProduct: function(product) {
        products[product.id] = {
            id: product.id,
            description: product.description
        };
    },
    // called whenever we change a list. normally this would mean a database API call
    updateList: function(products){
        localStorage.setItem(localStorageKey, JSON.stringify(list));
        // if we used a real database, we would likely do the below in a callback
        this.products = product;
        this.trigger(list); // sends the updated list to all listening components (TodoApp)
    },
    // this will be called by all listening components as they register their listeners
    getInitialState: function() {
        var loadedList = false;
        if (!loadedList) {
            // If no list is in localstorage, start out with a default one
            this.products = [{
                id: 1,
                description: "something"
            }];
        } else {
            this.products = _.map(JSON.parse(loadedList), function(item) {
                // just resetting the key property for each todo item
                item.key = todoCounter++;
                return item;
            });
        }
        return this.products;
    }
});

module.exports = productStore;