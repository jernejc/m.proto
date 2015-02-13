'use strict';

var React = require('react');
var TransitionGroup = require('react/lib/ReactCSSTransitionGroup');
var pageStore = require('../../stores/page');
var Router = require('react-router');
var Route = require('react-router').Route;
var DefaultRoute = require('react-router').DefaultRoute;
var RouteHandler = require('react-router').RouteHandler;
var Link = require('react-router').Link;

var getState = function() {
  return {
    title: pageStore.get().title
  };
};

var DefaultComponent = React.createClass({
  mixins: [pageStore.mixin, Router.State],
  componentDidMount: function() {
    pageStore.emitChange();
  },
  getInitialState: function() {
    return getState();
  },
  render: function() {
    var name = this.getRoutes().reverse()[0].name;
    console.log('name', name);

    return (
      /* jshint ignore:start */
      <div>
        <div className="default">
          <nav className="menu">
            <ul>
              <li><Link to="home">Home</Link></li>
              <li><Link to="dashboard">Dashboard</Link></li>
            </ul>
          </nav>
          <div className="main-container">
            <div className="content">
              <TransitionGroup component="div" transitionName="example">
                <RouteHandler key={name}/>
              </TransitionGroup>
            </div>
          </div>
        </div>
      </div>
      /* jshint ignore:end */
    );
  },
  // Event handler for 'change' events coming from store mixins.
  _onChange: function() {
    this.setState(getState());
  }
});

module.exports = DefaultComponent;
