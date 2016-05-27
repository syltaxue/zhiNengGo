var Reflux = require("reflux");

var productActions = Reflux.createActions([
    'updateProducts',
    'addProduct'
    ]);

module.exports = productActions;
