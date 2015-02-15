'use strict';

var React = require('react');
var Router = require('react-router');
var IndexPage = require('./components/index.jsx');
var Dashboard = require('./components/dashboard.jsx');
var DefaultLayout =  require('./components/layouts/default.jsx');
var Route = require('react-router').Route;
var DefaultRoute = require('react-router').DefaultRoute;
var RouteHandler = require('react-router').RouteHandler;
var Redirect = require('react-router').Redirect;

var routes = (
  <Route handler={DefaultLayout}>
    <DefaultRoute handler={IndexPage} addHandlerKey={true}/>
    <Route name="home" handler={IndexPage} addHandlerKey={true}/>
    <Route name="dashboard" handler={Dashboard} addHandlerKey={true}/>
    <Redirect from="home" to="/" />
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('app-wrapper'));
});

module.exports = routes;
