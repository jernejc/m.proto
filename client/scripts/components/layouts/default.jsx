  'use strict';

var React = require('react');
var TransitionGroup = require('react/lib/ReactCSSTransitionGroup');
var pageStore = require('../../stores/page');
var SideBarComponent = React.createFactory(require('../modules/sidebar.jsx'));
var TopBarComponent = React.createFactory(require('../modules/topbar.jsx'));
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
    console.log('Route name', name);

    return (
      /* jshint ignore:start */
        <div className="default">
          <SideBarComponent />
          <div className="main-container">
            <TopBarComponent />
            <div className="content">
              <TransitionGroup component="div" transitionName="example">
                <RouteHandler key={name}/>
              </TransitionGroup>
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
