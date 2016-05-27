var Reflux = require("reflux");

var productActions = Reflux.createActions([
    'updateProducts',
    'fetchProduct',
    'addProduct'
    ]);

module.exports = productActions;
