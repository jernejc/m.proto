  'use strict';

var React = require('react/addons');
var pageStore = require('../../stores/page');
var SideBarComponent = React.createFactory(require('../modules/sidebar.jsx'));
var TopBarComponent = React.createFactory(require('../modules/topbar.jsx'));
var Router = require('react-router');
var RouteHandler = require('react-router').RouteHandler;
  var Snap = require('../modules/snap');

var getState = function() {
    return {
        title: pageStore.getMetaData().title,
        isSidebarOpen: pageStore.getSidebarStatus()
    };
};


var DefaultLayout = React.createClass({
    mixins: [pageStore.mixin, Router.State],
    componentDidMount: function() {
        new Snap({
            element: document.querySelector('.snap-content'),
            disable: 'right'
        });
        pageStore.emitChange();
    },
    getInitialState: function() {
        return getState();
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
            <div className='snap-drawers'>
                <div className='snap-drawer snap-drawer-left'>
                    <SideBarComponent />
                </div>
            </div>
            <div className="snap-content">
                <TopBarComponent />
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
