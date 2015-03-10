'use strict';

var React = require('react/addons');
var pageActions = require('../../actions/page');
var filterActions = require('../../actions/filter');
var Navigation = require('react-router').Navigation;
var Button = React.createFactory(require('../modules/button.jsx'));
var Link = require('react-router').Link;

var SidebarComponent = React.createClass({
    mixins: [Navigation],

    render: function() {
        return (
            /* jshint ignore:start */
            <div className="topbar row">
                <Button icon="list-thumbnails" onClick={this.toggleSidebar} className="menu-btn" />
                <Button icon="checkbox" onClick={this.toggleFilter} className="filter-btn" />
            </div>
            /* jshint ignore:end */
        );
    },

    toggleSidebar: function() {
        pageActions.toggleSidebar('left');
    },

    toggleFilter: function() {
        this.transitionTo('filter');
    }

});

module.exports = SidebarComponent;
