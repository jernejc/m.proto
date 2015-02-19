  'use strict';

var React = require('react/addons');
var TransitionGroup = require('react/lib/ReactCSSTransitionGroup');
var pageStore = require('../../stores/page');
var SideBarComponent = React.createFactory(require('../modules/sidebar.jsx'));
var Router = require('react-router');
var RouteHandler = require('react-router').RouteHandler;

var getState = function() {
    return {
        title: pageStore.getMetaData().title,
        isSidebarOpen: pageStore.getSidebarStatus()
    };
};

var DefaultLayout = React.createClass({
    mixins: [pageStore.mixin, Router.State],
    componentDidMount: function() {
        pageStore.emitChange();
    },
    getInitialState: function() {
        return getState();
    },
    render: function() {
        var name = this.getRoutes().reverse()[0].name;
        var cx = React.addons.classSet;
        var mainClasses = cx({
            'main-container': true,
            'left': this.state.isSidebarOpen
        });

        return (
        /* jshint ignore:start */
        <div className="default">
            <SideBarComponent />
            <div className={mainClasses}>
                {this.props.children}
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

module.exports = DefaultLayout;
