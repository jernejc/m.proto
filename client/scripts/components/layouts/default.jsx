  'use strict';

var React = require('react/addons');
var pageStore = require('../../stores/page');
var SideBarComponent = React.createFactory(require('../modules/sidebar.jsx'));
var TopBarComponent = React.createFactory(require('../modules/topbar.jsx'));
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
    renderChildren: function () {
        return React.Children.map(this.props.children, function (child) {
            return React.addons.cloneWithProps(child, {
                className: 'row'
            })
        }.bind(this))
    },
    render: function() {
        var cx = React.addons.classSet,
            mainClasses = cx({
                'main-container': true,
                'left': this.state.isSidebarOpen
            });

        return (
        /* jshint ignore:start */
        <div className="default layout">
            <SideBarComponent />
            <div className={mainClasses}>
                <TopBarComponent />
                {this.renderChildren()}
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
