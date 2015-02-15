'use strict';

var React = require('react/addons');
var pageActions = require('../../actions/page');
var filterActions = require('../../actions/filter')
var Button = React.createFactory(require('../modules/button.jsx'));

var SidebarComponent = React.createClass({
    render: function() {
        return (
            /* jshint ignore:start */
            <div className="topbar">
                <Button icon="list-thumbnails" onClick={this.toggleSidebar} className="menu-btn" />
                <Button icon="checkbox" onClick={this.toggleFilter} className="filter-btn" />
            </div>
            /* jshint ignore:end */
        );
    },

    toggleSidebar: function() {
        console.log('openSidebar')
        pageActions.toggleSidebar('left');
    },

    toggleFilter: function() {
        filterActions.toggle();
    }

});

module.exports = SidebarComponent;
