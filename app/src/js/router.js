var React = require('react');
var render = require('react-dom').render;

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var browserHistory = require('react-router').browserHistory;
// This library is for listening all the events for material-ui
var injectTapEventPlugin = require("react-tap-event-plugin");
var Main = require('./home/main');
var ProductPage = require('./productPage/main');
var CreateAccount = require('./components/createAccount');
var Login = require('./components/Login');
injectTapEventPlugin();
render((
	<Router history={browserHistory}>
		<Route path="/" component={Main}>
			<Route path="#" component={Main}/>
		</Route>
		<Route path="/product/:productId" component={ProductPage}/>
		<Route path="/login" component={Login}/>
		<Route path="/createAccount" component={CreateAccount}/>
	</Router>
), document.getElementById("app"));