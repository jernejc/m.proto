'use strict';

var React = require('react/addons');
var sideBarActions = require('../../actions/sidebar');
var Button = React.createFactory(require('../modules/button.jsx'));

var SidebarComponent = React.createClass({
    render: function() {
        return (
            /* jshint ignore:start */
            <div className="topbar">
                <Button text="Toggle" icon="list-thumbnails" onClick={this.toggleSidebar} />
            </div>
            /* jshint ignore:end */
        );
    },

    toggleSidebar: function() {
        console.log('openSidebar')
        sideBarActions.toggle();
    }

});

module.exports = SidebarComponent;
