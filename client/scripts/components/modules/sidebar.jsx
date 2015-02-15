'use strict';

var React = require('react/addons');
var pageStore = require('../../stores/page');

function getSidebarState() {
    return {
        isOpen: pageStore.getSidebarStatus()
    }
}

var SideBarComponent = React.createClass({
    mixins: [pageStore.mixin],

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
