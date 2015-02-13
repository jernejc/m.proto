'use strict';

var React = require('react/addons');
var sideBarStore = require('../../stores/sidebar');

function getSidebarState() {
    return {
        isOpen: sideBarStore.getStatus()
    }
}

var SideBarComponent = React.createClass({
    mixins: [sideBarStore.mixin],

    getInitialState: function() {
        return getSidebarState();
    },

    render: function() {
        console.log('sidebar render isOpen', this.state.isOpen)
        var cx = React.addons.classSet;
        var classString = cx({
            'sidebar': true,
            'open': this.state.isOpen
        });

        return (
            /* jshint ignore:start */
            <div className={classString}>
                <ul>
                    <li><a href="/">Home</a></li>
                </ul>
            </div>
            /* jshint ignore:end */
        );
    },

    _onChange: function() {
        console.log('sidebar _onChange props:', getSidebarState());
        this.setState(getSidebarState());
    }

});

module.exports = SideBarComponent;
