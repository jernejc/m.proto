'use strict';

var React = require('react');
var Router = require('react-router');
var IndexPage = require('./components/index.jsx');
var Dashboard = require('./components/dashboard.jsx');
var Property = require('./components/property.jsx');
var Filter = require('./components/filter.jsx');
var DefaultLayout = require('./components/layouts/default.jsx');
var ListPage = require('./components/modules/list.jsx');
var Route = require('react-router').Route;
var DefaultRoute = require('react-router').DefaultRoute;
var RouteHandler = require('react-router').RouteHandler;
var Redirect = require('react-router').Redirect;
var App = require('./components/main.jsx');

var Routes = (
    <Route name="app" path="/" handler={App} addHandlerKey={true}>
        <Route name="list" handler={ListPage} addHandlerKey={true}/>
        <Route name="dashboard" handler={Dashboard} addHandlerKey={true}/>
        <Route name="property" path="property/:propertyId" handler={Property}/>
        <Route name="filter" handler={Filter} addHandlerKey={true}/>
        <DefaultRoute handler={IndexPage}/>
    </Route>
);

module.exports = Routes;
