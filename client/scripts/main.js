'use strict';

/** @jsx React.createElement */

var React = require('react');
var Router = require('react-router');
var Routes = require('./routes');

React.initializeTouchEvents(true);

Router.run(Routes, function (Handler) {
    React.render(<Handler />, document.body);
});