var Reflux = require("reflux");
var productActions = require("./../actions/productActions");
var products = [];

var productStore = Reflux.createStore({
    // this will set up listeners to all publishers in TodoActions, using onKeyname (or keyname) as callbacks
    listenables: [productActions],
    onAddProduct: function(product) {
        products[product.id] = {
            id: product.id,
            description: product.description
        };
    },
    onUpdateProducts: function(products) {
        this.products = products;
        this.updateList(this.products);
    },
    // called whenever we change a list. normally this would mean a database API call
    updateList: function(products){
        this.trigger(this.products); // sends the updated list to all listening components (TodoApp)
    },
    // this will be called by all listening components as they register their listeners
    getInitialState: function() {
        this.products = [];
        return this.products;
    }
});

module.exports = productStore;